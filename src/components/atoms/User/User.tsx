import React, { useEffect, useState } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";

import SpotifyToken, { isTokenValid } from "../../../types/Token";
import User, { DEFAULT_USER } from "../../../types/User";
import { FlexContainer } from "../../containers/FlexContainer";

const UserComponent = () => {
    const [isLogged, setIsLogged] = useState(false);
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
                id: userData.id,
                name: userData.display_name,
                iconURL: userData.images[0].url,
                followers: userData.followers.total,
                country: userData.country,
                mail: userData.email,
                url: userData.external_urls.spotify,
                accountType: userData.product,
                accessToken: {
                    token: token.token,
                    tokenType: token.tokenType,
                    refreshToken: token.refreshToken,
                    validUntil: token.validUntil,
                },
            };
            setCurrentUser(user);
            console.log(userData);
        };
        if (isTokenValid(token)) {
            getData();
            setIsLogged(true);
        } else {
            history.push("/refresh-token");
        }
    }, []);

    return (
        <div style={{ width: "100%" }}>
            {!isLogged ? (
                <div style={{ margin: "100px 0" }}>Loading data...</div>
            ) : (
                <FlexContainer>
                    <img
                        style={{
                            width: "25%",
                            position: "relative",
                            right: "15%",
                        }}
                        src={currentUser.iconURL}
                        alt="user-icon"
                    />

                    <FlexContainer flexDirection="column">
                        <div>
                            <h1 className="user-name">{currentUser.name}</h1>
                        </div>
                        <FlexContainer flexDirection="column">
                            <span> Mail : {currentUser.mail}</span>
                            <span> Followers : {currentUser.followers}</span>
                            <span> Country : {currentUser.country}</span>
                        </FlexContainer>
                    </FlexContainer>
                    <div>
                        <h3> Account type : {currentUser.accountType}</h3>
                        <a href={currentUser.url}>Spotify Profile</a>
                    </div>
                </FlexContainer>
            )}
        </div>
    );
};

export default UserComponent;
