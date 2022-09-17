import { SPOTIFY_FINDER_CONSTANT } from './config/env';

const SPOTIFY_LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_FINDER_CONSTANT.CLIENT.CLIENT_ID}&response_type=code&redirect_uri=${SPOTIFY_FINDER_CONSTANT.CLIENT.REDIRECT_URI}`

const Login = () => {

    return (
    <div>
        <a href={SPOTIFY_LOGIN_URL}>Log in to Spotify</a>
    </div>
    );
} 

export default Login