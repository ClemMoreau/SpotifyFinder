export default interface SpotifyToken {
    tokenType: string;
    token: string;
    refreshToken: string;
    validUntil: number;
}

export const isTokenValid = (token: SpotifyToken): boolean => {
    return token.validUntil > new Date().getTime();
};

export const getTokenValidity = (date: Date, value = 3600): number => {
    return date.getTime() + value * 1000;
};
