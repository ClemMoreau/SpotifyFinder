import { SPOTIFY_FINDER_CONSTANT } from '../../config/env';
import logo from '../../asset/spotify.png'
import './Login.css'
import { useEffect, useState } from 'react';

const SPOTIFY_LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_FINDER_CONSTANT.CLIENT.CLIENT_ID}&response_type=token&redirect_uri=${SPOTIFY_FINDER_CONSTANT.CLIENT.REDIRECT_URI}`

const Login = () => {

    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        console.log('Login rerender...');
    }, []) 

    const handleOver = () => {
        setShowHint(true);
    }

    const handleLeaver = () => {
        setShowHint(false);
    }

    return (
    <div className='background'>
        <div onMouseOver={handleOver} onMouseLeave={handleLeaver}>
            <a href={SPOTIFY_LOGIN_URL}>
                <img src={logo} alt='spotify-logo'/>
            </a>
        </div>
        {showHint && <div className='hint'>
            <h1 className='hint_title'>
                Click to log with you <br/> Spotify Account
            </h1>
        </div>}
    </div>
    );
} 

export default Login