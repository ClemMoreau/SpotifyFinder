import axios from "axios";
import { useEffect } from "react";

export interface ProfilProps {
    tokenType: string,
    token: string
}

const Profil = ({token, tokenType}: ProfilProps) => {

    useEffect(() => {

        const getData = async () => {
            const data = await axios.get('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: `${tokenType}  ${token}`
                }
            })
            console.log(data.data);
            
        }

        getData()
        
    }, [])

    return (
        <div>yo</div>
    );
}

export default Profil;