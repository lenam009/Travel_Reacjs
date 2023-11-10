import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    // headers: {
    //     'Content-Type': 'application/json',
    // },
});

export default axiosClient;
