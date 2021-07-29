<script lang="ts">
  import { Subject } from 'rxjs';
  import Header from './lib/components/Header.svelte';
  import Main from './lib/components/Main.svelte';
  import CitySelect from './lib/components/CitySelect.svelte';
  import Result from './lib/components/Result.svelte';
  import NotificationArea from './lib/components/NotificationArea.svelte';
  import { getDistance } from './lib/requests';
  import notifications from './lib/notifications';
  import type { City, NotificationData } from './lib/models';

  let cityFrom: City;
  let cityTo: City;
  let distance: number;

  const notification$ = new Subject<NotificationData>();

  const onCityFromSelect = ({ detail }) => {
    cityFrom = { ...detail };
  };

  const onCityToSelect = ({ detail }) => {
    cityTo = { ...detail };
    getDistance(cityFrom, cityTo).subscribe({
      next: value => {
        distance = value;
      },
      error: () => {
        notification$.next(notifications.error);
      },
    });
  };
</script>

<Header />
<Main>
  {#if !cityTo}
    <CitySelect
      on:select={onCityFromSelect}
      name="from"
      label="From"
      placeholder="Moscow"
      disabled={!!cityFrom}
      on:notify={({ detail }) => notification$.next(detail)}
    />
  {/if}

  {#if cityFrom && !cityTo}
    <CitySelect
      on:select={onCityToSelect}
      name="to"
      label="To"
      placeholder="London"
      disabled={!!cityTo}
      on:notify={({ detail }) => notification$.next(detail)}
    />
  {/if}

  {#if distance}
    <Result {distance} />
  {/if}
</Main>

<NotificationArea {notification$} />
