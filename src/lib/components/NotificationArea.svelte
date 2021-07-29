<script lang="ts">
  import Notification from './Notification.svelte';
  import type { Subject } from 'rxjs';
  import type { NotificationData } from '../models';

  let notification: NotificationData;

  export let notification$: Subject<NotificationData>;

  notification$.subscribe(data => {
    notification = data;

    if (data) {
      setTimeout(() => notification$.next(null), 3000);
    }
  });
</script>

<div
  aria-live="assertive"
  class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
>
  {#if notification}
    <Notification {...notification} />
  {/if}
</div>
