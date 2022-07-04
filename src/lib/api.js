const get = (path, headers) =>
    fetch(path, headers).then((r) => r.status === 200 ? r.json() : JSON.stringify({}));

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const refresh_token = import.meta.env.CLIENT_TOKEN;

const basic = import.meta.env.BASE64;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams( {
            grant_type: 'refresh_token',
            refresh_token
        }).toString()});

    return await response.json();
};

export const  getCurrentPlaying = async () => {
    const {access_token} = await getAccessToken();
    return get(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
}
