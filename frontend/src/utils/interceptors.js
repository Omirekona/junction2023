import React, {useEffect} from "react";
import { FIREBASE_AUTH } from "../config/firebase"
import axios from "axios";

//not used for now; prolly won't be used
const useRequestAndResponseInterceptor = () => {
    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use(async (config) => {
            const user = FIREBASE_AUTH.currentUser;
            if (user) {
                const jwtToken = await user.getIdToken();
                config.headers.Authorization = `Bearer ${jwtToken}`;
            }
            return config;
        }, error => {
            return Promise.reject(error);
        })
        const responseInterceptor = axios.interceptors.response.use(response => {
            return response;
        }, error => {
            if (error.response) {
                if (error.response.status === 401 || error.response.status === 403) {
                    console.log("received 401")
                    window.location.href = "/login";
                }
            }
            return Promise.reject(error);
        });


        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        }
    }, []);
}

export default useRequestAndResponseInterceptor;