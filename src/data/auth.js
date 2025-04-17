import { request } from "../lib/request";
let userPromise;

export function fetchUserAuthStatus(){
    if(!userPromise){
        userPromise = request({ endpoint: 'auth' });
    }

    return userPromise;
}