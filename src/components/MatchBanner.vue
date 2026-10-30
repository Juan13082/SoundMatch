<script setup>
defineProps({
  userA: Object,
  userB: Object
});
</script>

<template>
  <section class="banner">
    <div class="banner-users">
      <span>{{ userA?.name }}</span>
      <div class="match-badge">
        <b>-- %</b>
      </div>
      <span>{{ userB?.name }}</span>
    </div>
  </section>
</template>

<style scoped>
.banner {
  background: #a8f59b;
  color: #121212;
  border-radius: 1.5rem;
  padding: 2rem;
}
.banner-users {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.match-badge {
  background: #0a5c15;
  color: #fff;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  display: grid;
  place-items: center;
}
</style>