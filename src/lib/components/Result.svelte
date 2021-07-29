<script lang="ts">
  export let distance: number;
</script>

<div class="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Your distance is</h2>
  </div>
</div>
<div class="mt-10 pb-12 sm:pb-16">
  <div class="relative">
    <div class="absolute inset-0 h-1/2" />
    <div class="relative max-w-7xl mx-auto">
      <div class="max-w-4xl mx-auto">
        <dl class="rounded-lg shadow-lg px-16 sm:px-20 py-4">
          <div class="p-6 text-center border-t border-gray-100">
            <div class="text-5xl font-extrabold text-indigo-600">{distance}</div>
            <div class="mt-2 text-lg leading-6 font-medium text-gray-500">kilometers</div>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>
