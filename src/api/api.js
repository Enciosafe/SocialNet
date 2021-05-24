import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1c558248-1fb5-418d-acd5-2f0508b89e90'
    }
});


export const usersApi = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
         return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
         return instance.delete(`hfollow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`);

    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    }
}


