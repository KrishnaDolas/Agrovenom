import { myAxios } from "./axios";

export const login=(user)=>{
    return myAxios.post('api/AdminLogin/',user);
};