import axios from "axios";
import { useEffect, useState } from "react"
import { SPOTIFY_FINDER_CONSTANT } from './config/env';
import Profil, { ProfilProps } from "./Profil";

const RedirectAfterLog = () => {
    
    const [accessToken, setAccessToken] = useState<ProfilProps>()

    useEffect(() => {
        const getToken = async () => {
            
            if (!accessToken) {
                
                const code = window.location.toString().split('=')[1];
                
                const data = await axios({
                    method: 'post',
                    url: 'https://accounts.spotify.com/api/token',
                    data: 
                      `grant_type=authorization_code&code=${code}&redirect_uri=${SPOTIFY_FINDER_CONSTANT.CLIENT.REDIRECT_URI}`
                    ,
                    headers: {
                      'content-type': 'application/x-www-form-urlencoded',
                      Authorization: `Basic ${Buffer.from(`${SPOTIFY_FINDER_CONSTANT.CLIENT.CLIENT_ID}:${SPOTIFY_FINDER_CONSTANT.CLIENT.CLIENT_SECRET}`).toString('base64')}`,
                    },
                  })
                  console.log(data);
                  
                setAccessToken({tokenType: data.data.token_type, token: data.data.access_token})
            }
            
        } 
        getToken()
    }, [])
    
    return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {accessToken ? 
        <div>
            <Profil token={accessToken.token} tokenType={accessToken.tokenType}/>
        </div>
        : <span>Redirect...</span>}
    </div>
    )
}

export default RedirectAfterLog;