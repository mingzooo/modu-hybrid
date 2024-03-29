import axios from 'axios';

// const devServerURL = "http://localhost:3030/"; //로컬 서버
const devServerURL = "http://54.180.217.46/"; //개발 서버
const prodServerURL = "http://54.180.217.46/"; //실 서버

export const apiClient = axios.create({
    baseURL: process.env.NODE_ENV !== 'development' ? prodServerURL : devServerURL,
});


export const customApiClient = async (method, url, data) => {

    try {
        const result = await apiClient(url, {
            method: method,
            data: data,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("x-access-token"),
            }
        });

        return result.data;
    }
    catch (err) {
        console.log(err.response);
        console.log(err.message);

        if (!err.response) {
            return 'Network Error';
        }

        return null
    }
}