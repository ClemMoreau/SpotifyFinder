import React from "react";
import { useEffect } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";

import { SPOTIFY_FINDER_CONSTANT } from "../config/env";
import SpotifyToken, { getTokenValidity } from "../types/Token";

const RedirectAfterLog = () => {
    const history = useHistory();

    useEffect(() => {
        const getToken = async () => {
            const code = window.location.toString().split("=")[1];

            const data = await axios({
                method: "post",
                url: "https://accounts.spotify.com/api/token",
                data: `grant_type=authorization_code&code=${code}&redirect_uri=${SPOTIFY_FINDER_CONSTANT.CLIENT.REDIRECT_URI}`,
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    Authorization: `Basic ${Buffer.from(
                        `${SPOTIFY_FINDER_CONSTANT.CLIENT.CLIENT_ID}:${SPOTIFY_FINDER_CONSTANT.CLIENT.CLIENT_SECRET}`
                    ).toString("base64")}`,
                },
            });
            const token: SpotifyToken = {
                token: data.data.access_token,
                tokenType: data.data.token_type,
                refreshToken: data.data.refresh_token,
                validUntil: getTokenValidity(
                    new Date(),
                    parseInt(data.data.expires_in)
                ),
            };
            window.localStorage.setItem("token", JSON.stringify(token));
        };

        getToken();
        setTimeout(() => {
            history.push("/profile");
        }, 1000);
    }, []);

    return (
        <div>
            <div>Redirect...</div>
        </div>
    );
};

export default RedirectAfterLog;
