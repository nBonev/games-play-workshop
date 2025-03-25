import requester from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    create(email, gameId, comment) {
        return requester.post(baseUrl, {email, gameId, comment});
    }
}