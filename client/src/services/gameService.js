import requester from "../utils/requester";


const baseUrl = 'http://localhost:3030/jsonstore/games';

export default {
    async getAll() {
        const result = await requester.get(baseUrl);
        const games = Object.values(result);
        return games;
    },
    create(gameData) {
        return requester.post(baseUrl, gameData)
    }
}