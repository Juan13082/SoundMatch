<script setup>
import { ref, onMounted } from 'vue';
import { redirectToSpotifyLogin, handleSpotifyCallback, fetchUserData } from './spotify.js';
import AppHeader from './AppHeader.vue';
import MatchBanner from './MatchBanner.vue';
import NowPlayingCard from './NowPlayingCard.vue';
import TopArtistsList from './TopArtistsList.vue';
import TopTracksList from './TopTracksList.vue';
import MinutesBar from './MinutesBar.vue';

const users = ref([
  { id: 'A', name: 'User A', initials: 'UA', minutes: 0, currentTrack: null, topArtists: [], topTracks: [], connected: false },
  { id: 'B', name: 'User B', initials: 'UB', minutes: 0, currentTrack: null, topArtists: [], topTracks: [], connected: false }
]);

const connectUser = (userId) => {
  redirectToSpotifyLogin(userId);
};

const logoutUser = (userId) => {
  const index = userId === 'A' ? 0 : 1;
  users.value[index].connected = false;
};

onMounted(async () => {
  await handleSpotifyCallback();
  const dataA = await fetchUserData('A');
  if (dataA) users.value[0] = { ...users.value[0], ...dataA };
});
</script>

<template>
  <div class="soundmatch">
    <AppHeader :users="users" @connect="connectUser" @logout="logoutUser" />
    <MatchBanner :userA="users[0]" :userB="users[1]" />
    <section class="grid-2">
      <NowPlayingCard :user="users[0]" />
      <NowPlayingCard :user="users[1]" />
    </section>
    <section class="grid-2">
      <TopArtistsList :artists="users[0].topArtists" />
      <TopArtistsList :artists="users[1].topArtists" />
    </section>
    <section class="grid-2">
      <TopTracksList :tracks="users[0].topTracks" />
      <TopTracksList :tracks="users[1].topTracks" />
    </section>
    <MinutesBar :userA="users[0]" :userB="users[1]" />
  </div>
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  background: #121212;
  color: #fff;
  font-family: system-ui, sans-serif;
}
.soundmatch {
  width: 100%;
  padding: 2vw 4vw;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2vw;
  width: 100%;
}
</style>
