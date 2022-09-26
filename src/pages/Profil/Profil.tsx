import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";

import "./Profil.css";
import SpotifyToken, { isTokenValid } from "../../types/Token";
import User, { DEFAULT_USER } from "../../types/User";

const Profil = () => {
    const [currentUser, setCurrentUser] = useState<User>(DEFAULT_USER);
    const history = useHistory();

    useEffect(() => {
        const token: SpotifyToken = JSON.parse(
            localStorage.getItem("token") || "{}"
        );
        const getData = async () => {
            const data = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `${token.tokenType} ${token.token}`,
                },
            });

            const userData = data.data;

            const user = {
                name: userData.display_name,
                iconURL: userData.images[0].url,
                followers: userData.followers.total,
                accessToken: {
                    token: token.token,
                    tokenType: token.tokenType,
                    refreshToken: token.refreshToken,
                    validUntil: token.validUntil,
                },
            };
            setCurrentUser(user);
            console.log(user);
        };
        if (isTokenValid(token)) {
            getData();
        } else {
            history.push("/refresh-token");
        }
    }, []);

    return (
        <>
            {currentUser === DEFAULT_USER ? (
                <div style={{ margin: "100px 0" }}>Loading data...</div>
            ) : (
                <div className="user-info">
                    <img src={currentUser.iconURL} alt="user-icon" />
                    <h1 className="user-name">{currentUser.name}</h1>
                    <span> Followers : {currentUser.followers}</span>
                </div>
            )}
        </>
    );
};

export default Profil;
