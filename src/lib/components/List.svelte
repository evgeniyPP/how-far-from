<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { City } from '../models';

  const dispatch = createEventDispatcher();

  export let data: City[];
</script>

<ul class="divide-y divide-gray-200 max-w-lg w-full">
  {#each data as item}
    <li on:click={() => dispatch('select', item)} class="py-4 cursor-pointer hover:bg-gray-100">
      <div class="px-4 flex justify-between">
        <span class="text-sm min-w-32 font-medium text-gray-900">{item.name}</span>
        <span class="w-10 text-sm text-gray-500">{item.country}</span>
        <span class="w-28 text-sm text-gray-500">Lat: {item.latitude}</span>
        <span class="w-28 text-sm text-gray-500">Lng: {item.longitude}</span>
      </div>
    </li>
  {/each}
</ul>
