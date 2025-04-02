import { useContext, useEffect, useState } from "react";
import requester from "../utils/requester";
import { UserContext } from "../contexts/UserContext";


const baseUrl = 'http://localhost:3030/data/games';

export default {
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

export const useGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        requester.get(baseUrl)
            .then(setGames)
    }, []);

    return {
        games,
    }
}

export const useGame = (gameId) => {
    const [game, setGame] = useState({});

    useEffect(() => {
        requester.get(`${baseUrl}/${gameId}`)
            .then(setGame)
    }, [gameId]);

    return {
        game,
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