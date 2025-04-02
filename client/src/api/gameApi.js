import { useContext } from "react";
import requester from "../utils/requester";
import { UserContext } from "../contexts/UserContext";


const baseUrl = 'http://localhost:3030/data/games';

export default {
    async getAll() {
        const result = await requester.get(baseUrl);
        const games = Object.values(result);
        return games;
    },
    getOne(gameId) {
        return requester.get(`${baseUrl}/${gameId}`);

    },
    edit(gameId, gameData) {
        return requester.put(`${baseUrl}/${gameId}`, {...gameData, _id: gameId});
    },
    delete(gameId) {
        return requester.delete(`${baseUrl}/${gameId}`);
    }
}

export const useCreateGame = () => {
    const { accessToken } = useContext(UserContext);
    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    }
    
    const create = (gameData) => {
        return requester.post(baseUrl, gameData, options);
    }

    return {
        create,
    }
}