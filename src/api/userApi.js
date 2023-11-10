import axiosClient from './axiosClient';

const userApi = {
    getByName(name, type = 'less') {
        const url = 'users/search';
        return axiosClient.get(url, { params: { q: name, type } });
    },
    get(id) {
        const url = `users/search/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = 'users/search';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `users/search/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `users/search/${id}`;
        return axiosClient.get(url);
    },
};

export default userApi;
