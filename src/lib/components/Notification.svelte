<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { NotificationStatus } from '../models';

  export let title: string = null;
  export let text: string = null;
  export let status: NotificationStatus = 'info';
</script>

<div transition:fade class="w-full flex flex-col items-center space-y-4 sm:items-end">
  <div
    class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
  >
    <div class="p-4">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          {#if status === 'success'}
            <svg
              class="h-6 w-6 text-green-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          {/if}
          {#if status === 'info'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          {/if}
          {#if status === 'error'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          {/if}
        </div>
        <div class="ml-3 w-0 flex-1 pt-0.5">
          {#if title}
            <p class="text-sm font-medium text-gray-900">{title}</p>
          {/if}
          {#if text}
            <p class="mt-1 text-sm text-gray-500">{text}</p>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
