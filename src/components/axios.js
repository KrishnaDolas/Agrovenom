import axios from "axios";

export const BASE_URL = 'https://dsboxapi.beatsacademy.in'

    export const myAxios = axios.create({
        baseURL:BASE_URL,
    });