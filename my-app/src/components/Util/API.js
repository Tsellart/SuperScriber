import axios from "axios";

export default {
    getSubs: function(query) {
        return axios.get("/api/Subscriptions", { params: { q: query } });
    }
};