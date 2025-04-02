// import { useEffect, useRef } from "react";
import { useContext } from "react";
import requester from "../utils/requester";
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    // const abortRef = useRef(new AbortController());
    
    const login = async (email, password) => 
        requester.post(
            `${baseUrl}/login`,
             { email, password },
            //  {signal: abortRef.current.signal }
        );

    // useEffect(() => {
    //     const abortController = abortRef.current;

    //     return () => abortController.abort();
    // }, []);

    return {
        login,
    };
};

export const useRegister = () => {

    const register = (email, password) => 
        requester.post(`${baseUrl}/register`, {email, password})

    return {
        register,
    }
};

export const useLogout = () => {
    const { accessToken } = useContext(UserContext);
    const options = {
        headers: {
            'X-Authorization': accessToken
        }
    }

    const logout = () => requester.get(`${baseUrl}/logout`, null, options)

    return {
        logout,
    }
}