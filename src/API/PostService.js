import axios from "axios";
import {config} from "react-transition-group";

export default class PostService {
    static async get(limit=10, page=1) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts?', {
            params: {
                _limit: limit,
                _page: page
            }
        })
    }
    static async getById(id) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }

    static async getCommentsByPostId(id) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    }
}