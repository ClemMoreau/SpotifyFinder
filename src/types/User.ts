import SpotifyToken from "./Token";

interface User {
    name: string,
    iconURL: string,
    followers: number,
    accessToken: SpotifyToken,
}

export const DEFAULT_USER: User = {
    name: '',
    iconURL: '',
    followers: -1,
    accessToken: {
        token: '',
        tokenType: '',
        refreshToken: '',
        validUntil: -1
    }
}

export default User;