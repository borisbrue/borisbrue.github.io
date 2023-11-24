<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure></figure>
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  price: Number,
});
</script>

<style lang="scss" scoped></style>
