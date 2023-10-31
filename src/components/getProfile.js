
async function getProfile(accessToken) {
    let accessToken = localStorage.getItem('access_token');
  
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer 2d46dcd776204d95a0abb0ef203a497a'
      }
    });
  
    const data = await response.json();
  }

  export default getProfile;