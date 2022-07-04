const get = (path, headers) =>
    fetch(path, headers).then((r) => r.status === 200 ? r.json() : JSON.stringify({}));

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const client_id = import.meta.env.CLIENT_ID;
const client_secret = import.meta.env.CLIENT_SECRET;
const refresh_token = import.meta.env.CLIENT_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            grant_type: 'refresh_token',
            refresh_token
        })
    });

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
