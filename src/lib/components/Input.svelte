<script lang="ts">
  export let name: string;
  export let label: string;
  export let placeholder: string;
  export let value = '';
  export let disabled = false;
</script>

<div class="my-4 max-w-lg w-full">
  <label for={name} class="block text-sm font-medium text-gray-700">{label}</label>
  <div class="mt-1">
    <input
      bind:value
      type="text"
      {name}
      id={name}
      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      {placeholder}
      {disabled}
    />
  </div>
</div>
