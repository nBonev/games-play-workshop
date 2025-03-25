const baseUrl = 'http://localhost:3030/jsonstore/games';

export default {
    async create(gameDate) {
        const response = await fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gameDate),
        });

        const result = await response.json();

        return result;
    }
}