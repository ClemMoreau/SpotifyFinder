import SpotifyToken from "./Token";

interface User {
    id: string;
    name: string;
    iconURL: string;
    followers: number;
    country: string;
    mail: string;
    url: string;
    accountType: string;
    accessToken: SpotifyToken;
}

export const DEFAULT_USER: User = {
    id: "",
    name: "",
    iconURL: "",
    followers: -1,
    country: "",
    mail: "",
    url: "",
    accountType: "",
    accessToken: {
        token: "",
        tokenType: "",
        refreshToken: "",
        validUntil: -1,
    },
};

export default User;
