let accessToken;
const clientID = "63e74b0a7cc547b7b29e40b8c11360db";
const redirectURI = "http://locolhost:3000";

const Spotify = {
    getAccessToken() {
        if(accessToken) return accessToken
        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        if (tokenInURL && expiryTime) {
            // Setting access token and expiry time variables
            accessToken = tokenInURL;
            const expiresIn = Number(expiryTime[1]);

            // Setting the access token to expire at the value for expiration time
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);

            // Clearing the url after the access token expires
            window.history.pushState("Access token", null, "/");
            return accessToken;
        }

        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        window.location = redirect;
    }
}

export {Spotify};