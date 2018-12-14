const CLIENT_ID = " c10d096cc2364f80a31575cb2bc39ec0";
const response_type = 'token';
const REDIRECT_URI = 'http://localhost:3000/';
let access_token;
let expires_in;

const Spotify = {

    getAccessToken() {
      if (access_token) {
          return access_token;
      }
      let url = window.location.href;
      const foundAccessToken = url.match(/access_token=([^&]*)/);
      const foundExpiresIn = url.match(/expires_in=([^&]*)/);

      if(foundAccessToken && foundExpiresIn) {
          access_token = foundAccessToken[1];
          expires_in = Number(foundExpiresIn[1]);
          window.setTimeout(() => accessToken = '', expiresIn * 1000);
          window.history.pushState('Access Token', null, '/');
          url = https://accounts.spotify.com/authorize?client_id={CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri={REDIRECT_URI};
          
      }
    }

};

export default Spotify;