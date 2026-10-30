<script setup>
defineProps({
  userA: Object,
  userB: Object
});
</script>

<template>
  <section>
    <p>Minutes</p>
    <div class="minutes-bar">
      <div class="part-left">
        {{ userA?.minutes || 0 }}
      </div>
      <div class="part-right">
        {{ userB?.minutes || 0 }}
      </div>
    </div>
  </section>
</template>

<style scoped>
.minutes-bar {
  display: flex;
  height: 4rem;
  border-radius: 1rem;
  overflow: hidden;
  background: #181818;
}
.part-left {
  width: 50%;
  background: #1ed760;
  color: #000;
  display: flex;
  align-items: center;
  padding-left: 1rem;
}
.part-right {
  flex: 1;
  background: #0f3e1b;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;
}
</style>