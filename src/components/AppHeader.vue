<script setup>
defineProps({
  users: Array
});
const emit = defineEmits(['connect']);
</script>

<template>
  <header class="navbar">
    <div class="logo">SoundMatch</div>
    <div class="auth-buttons">
      <div v-for="user in users" :key="user.id">
        <button @click="emit('connect', user.id)">
          connect
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #282828;
  padding-bottom: 1rem;
}
.logo {
  font-weight: bold;
  font-size: 1.25rem;
  color: #1ed760;
}
button {
  background: #1ed760;
  border: 0;
  border-radius: 20px;
  padding: 0.4rem 1rem;
  cursor: pointer;
}
</style>