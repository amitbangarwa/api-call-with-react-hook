import {client} from ".";

const getComments = () => client.get("/comments");

export default {
    getComments
};
