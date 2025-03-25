import requester from "../utils/requester";


const baseUrl = 'http://localhost:3030/jsonstore/games';

export default {
    async getAll() {
        const result = await requester.get(baseUrl);
        const games = Object.values(result);
        return games;
    },
    getOne(gameId) {
        return requester.get(`${baseUrl}/${gameId}`);

    },
    create(gameData) {
        return requester.post(baseUrl, gameData);
    },
    delete(gameId) {
        return requester.delete(`${baseUrl}/${gameId}`);
    }
}