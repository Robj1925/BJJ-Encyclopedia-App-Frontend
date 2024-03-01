import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8081/users';

export const listUsers = () => {
    return axios.get(REST_API_BASE_URL);
}

export default listUsers