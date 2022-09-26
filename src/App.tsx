import React from "react";
import { useEffect, useState } from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory,
} from "react-router-dom";

import "./App.css";
import logo from "./asset/spotify.png";
import { SPOTIFY_FINDER_CONSTANT } from "./config/env";
import Profil from "./pages/Profil/Profil";
import RedirectAfterLog from "./pages/RedirectAfterLog";
import RefreshToken from "./pages/RefreshToken";
import SpotifyToken, { isTokenValid } from "./types/Token";

const SPOTIFY_LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_FINDER_CONSTANT.CLIENT.CLIENT_ID}&response_type=code&redirect_uri=${SPOTIFY_FINDER_CONSTANT.CLIENT.REDIRECT_URI}`;
const queryClient = new QueryClient();

function App() {
    const [showHint, setShowHint] = useState(false);

    const handleOver = () => {
        setShowHint(true);
    };

    const handleLeaver = () => {
        setShowHint(false);
    };

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Switch>
                    <Route path="/refresh-token">
                        <RefreshToken />
                    </Route>
                    <Route path="/profile">
                        <Profil />
                    </Route>
                    <Route path="/callback">
                        <RedirectAfterLog />
                    </Route>
                    <Route path="/" exact>
                        <div className="background">
                            <div
                                onMouseOver={handleOver}
                                onMouseLeave={handleLeaver}
                            >
                                <a href={SPOTIFY_LOGIN_URL}>
                                    <img src={logo} alt="spotify-logo" />
                                </a>
                            </div>
                            {showHint && (
                                <div className="hint">
                                    <h1 className="hint_title">
                                        Click to log with you <br /> Spotify
                                        Account
                                    </h1>
                                </div>
                            )}
                        </div>
                    </Route>
                </Switch>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
