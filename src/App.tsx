import { SPOTIFY_FINDER_CONSTANT } from './config/env';
import logo from './asset/spotify.png';
import './App.css';
import { Route, BrowserRouter as Router, Switch, useHistory } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query'
import RedirectAfterLog from './pages/RedirectAfterLog';
import Profil from './pages/Profil/Profil';
import { useEffect, useState } from 'react';
import RefreshToken from './pages/RefreshToken';
import SpotifyToken, { isTokenValid } from './types/Token';

const SPOTIFY_LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_FINDER_CONSTANT.CLIENT.CLIENT_ID}&response_type=code&redirect_uri=${SPOTIFY_FINDER_CONSTANT.CLIENT.REDIRECT_URI}`
const queryClient = new QueryClient();


function App() {

  const [showHint, setShowHint] = useState(false);
  const history = useHistory();

  const handleOver = () => {
    setShowHint(true);
  }

  const handleLeaver = () => {
    setShowHint(false);
  }

  useEffect(() => {
    const token: SpotifyToken = JSON.parse(localStorage.getItem('token') || '{}');
    if (!isTokenValid(token)) {
        localStorage.removeItem('token');
        history.push('/refresh-token');
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path='/refresh-token'>
            <RefreshToken />
          </Route>
          <Route path='/profile'>
            <Profil />
          </Route>
          <Route path="/callback">
              <RedirectAfterLog/>
          </Route>
          <Route path="/" exact> 
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
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
