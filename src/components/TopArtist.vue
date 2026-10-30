<script setup>
defineProps({
  artists: Array
});
</script>

<template>
  <div>
    <p>Top Artists</p>
    <div class="stack">
      <div v-for="artist in artists" :key="artist.id" class="card">
        <b>{{ artist.name }}</b>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.card {
  height: 3rem;
  background: #333;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
}
</style>