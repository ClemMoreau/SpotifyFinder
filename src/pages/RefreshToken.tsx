import axios from "axios";
import { useEffect } from "react";
import { SPOTIFY_FINDER_CONSTANT } from "../config/env";

const RefreshToken = () => {

    useEffect(() => {
        const refreshToken = async () => {
            const {refreshToken} = JSON.parse(localStorage.getItem("token") || "{}");
            const data = await axios({
                method: 'post',
                url: 'https://accounts.spotify.com/api/token',
                data: JSON.stringify({
                  grant_type: 'refresh_token',
                  refresh_token: refreshToken
                }),
                headers: {
                  'content-type': 'application/x-www-form-urlencoded',
                  Authorization: `Basic ${Buffer.from(`${SPOTIFY_FINDER_CONSTANT.CLIENT.CLIENT_ID}:${SPOTIFY_FINDER_CONSTANT.CLIENT.CLIENT_SECRET}`).toString('base64')}`,
                },
              })
            console.log(data.data);     
        }
        refreshToken();
    }, [])

    return (<div></div>)
}

export default RefreshToken;