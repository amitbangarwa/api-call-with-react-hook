import {client} from ".";

const getPosts = () => client.get("/posts");

export default {
    getPosts
};
