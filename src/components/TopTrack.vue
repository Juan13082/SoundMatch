<script setup>
defineProps({
  tracks: Array
});
</script>

<template>
  <div>
    <p>Top Tracks</p>
    <div class="stack">
      <div v-for="track in tracks" :key="track.id" class="card">
        <span>{{ track.name }}</span>
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