const CLIENT_ID = " c10d096cc2364f80a31575cb2bc39ec0";
const response_type = 'token';
const REDIRECT_URI = 'http://localhost:3000/';
let accessToken;
let expiresIn;

const Spotify = {

    getAccessToken() {
      if (accessToken) {
          return accessToken;
      }
      let url = window.location.href;
      const foundAccessToken = url.match(/access_token=([^&]*)/);
      const foundExpiresIn = url.match(/expiresIn=([^&]*)/);

      if(foundAccessToken && foundExpiresIn) {
          accessToken = foundAccessToken[1];
          expiresIn = Number(foundExpiresIn[1]);
          window.setTimeout(() => accessToken = '', expiresIn * 1000);
          window.history.pushState('Access Token', null, '/');
          window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;

      }
    },

    search(TERM) {
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${TERM}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (jsonResponse.tracks) {
                return jsonResponse.tracks.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }));
            }
        });
    }
};

export default Spotify;