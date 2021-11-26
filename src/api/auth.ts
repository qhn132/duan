import API from './axiosClient'

// Auth API

export const loginApi = (user: any) => API.post('/login', user)
export const registerApi = (user: any) => {
    return API.post('/register', user)
}

// Profile API

export const getProfileApi = async () => API.get('/profile');



