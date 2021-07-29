<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { debounceTime, filter, Subject, switchMap, tap } from 'rxjs';
  import Input from './Input.svelte';
  import List from './List.svelte';
  import Loading from './Loading.svelte';
  import { getCities } from '../requests';
  import notifications from '../notifications';
  import type { City } from '../models';

  const dispatch = createEventDispatcher();

  export let name: string;
  export let label: string;
  export let placeholder: string;
  export let disabled = false;

  let query = '';
  let listData = null;
  let loading = false;
  let hidden = false;

  const query$ = new Subject<string>();
  const listData$ = new Subject<City[]>();

  query$
    .pipe(
      debounceTime(500),
      filter(query => query?.length > 1),
      tap(() => (loading = true)),
      switchMap(query => getCities(query)),
      tap(() => (loading = false))
    )
    .subscribe({
      next: data => {
        listData$.next(data);

        if (!data?.length) {
          dispatch('notify', notifications.noCities);
        }
      },
      error: () => {
        dispatch('notify', notifications.error);
      },
    });
  listData$.subscribe(data => (listData = data));

  $: query$.next(query);

  const onCitySelect = ({ detail }) => {
    dispatch('select', detail);
    hidden = true;
  };
</script>

<Input bind:value={query} disabled={disabled || loading} {name} {label} {placeholder} />
{#if loading}
  <Loading />
{/if}
{#if listData && !loading && !hidden}
  <List on:select={onCitySelect} data={listData} />
{/if}
