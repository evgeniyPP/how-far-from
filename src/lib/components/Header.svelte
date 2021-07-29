<script lang="ts">
  import backgroundImage from '../../assets/bg.jpg';
</script>

<div class="relative bg-indigo-800">
  <div class="absolute inset-0">
    <img
      class="w-full h-full object-cover"
      src={backgroundImage}
      alt="https://unsplash.com/photos/4Zk45jNyQS4"
    />
    <div class="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
  </div>
  <div class="relative max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
      How Far From
    </h1>
    <p class="mt-6 text-xl text-indigo-100 max-w-3xl">
      Just select two cities and find out the distance between them.
    </p>
  </div>
</div>
