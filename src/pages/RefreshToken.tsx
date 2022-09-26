import React from "react";
import { useEffect } from "react";

import axios from "axios";

import { SPOTIFY_FINDER_CONSTANT } from "../config/env";
import SpotifyToken, { getTokenValidity } from "../types/Token";

const RefreshToken = () => {
    useEffect(() => {
        const refreshToken = async () => {
            const { refreshToken } = JSON.parse(
                localStorage.getItem("token") || "{}"
            );
            const data = await axios({
                method: "post",
                url: "https://accounts.spotify.com/api/token",
                data: `grant_type=refresh_token&refresh_token=${refreshToken}`,

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
                refreshToken: "",
                validUntil: getTokenValidity(
                    new Date(),
                    parseInt(data.data.expires_in)
                ),
            };
            window.localStorage.setItem("token", JSON.stringify(token));
        };
        refreshToken();
    }, []);

    return <div></div>;
};

export default RefreshToken;
