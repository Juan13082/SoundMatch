const CLIENT_ID = '8cc86ce0102144f1896542a322082193';
const REDIRECT_URI = 'http://127.0.0.1:5185/callback';

export async function redirectToSpotifyLogin(userId) {
    localStorage.setItem('auth_target_user', userId);
    const params = new URLSearchParams({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
        scope: 'user-read-private user-top-read'
    });
    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

export async function handleSpotifyCallback() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (!code) return null;
    const targetUser = localStorage.getItem('auth_target_user') || 'A';
    return targetUser;
}

export async function refreshAccessToken(targetUser) {
    return null;
}

async function fetchWebApi(endpoint, userId = 'A') {
    const token = localStorage.getItem(`token_user_${userId}`);
    if (!token) return null;
    const res = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return await res.json();
}

export async function fetchUserData(userId = 'A') {
    const profile = await fetchWebApi('me', userId);
    return {
        name: profile?.display_name || 'Spotify User',
        initials: '??',
        currentTrack: null,
        topArtists: [],
        topTracks: [],
        topSongWeek: '-',
        minutes: 0,
        connected: Boolean(profile)
    };
}

export async function fetchCurrentTrack(userId = 'A') {
    return null;
}