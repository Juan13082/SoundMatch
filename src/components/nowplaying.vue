<script setup>
defineProps({
  user: Object
});
</script>

<template>
  <div>
    <p>{{ user?.name }}</p>
    <div v-if="user?.currentTrack" class="now-playing-card">
      <span>{{ user.currentTrack.title }}</span>
    </div>
    <div v-else class="now-playing-card idle">
      Keine Musik
    </div>
  </div>
</template>

<style scoped>
.now-playing-card {
  height: 4.5rem;
  background: #1f1f1f;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
}
.idle {
  color: #777;
}
</style>