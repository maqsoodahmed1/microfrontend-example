import { useState, useEffect, useRef } from 'react';
import Cookies from "js-cookie"
import { jwtDecode } from 'jwt-decode';
import { LoginCredentials, loginUser, logoutUser, refresh, sessionData } from '../../api';
import debugModule from "debug"

const debug = debugModule('dataphone:auth');

interface SessionData {
    accountID: string;
    email: string;
    firstName: string;
    lastName: string;
    id: string;
    permissions: any
    sessionExpires: string;
}

interface AuthData {
    isAuthenticated: boolean;
    expirationTime: number | null;
    sessionData: SessionData | null;
}


const AppCookies = [
    'sid',
    'trustedDevice',
    'last_account_id',
]

const randomRefreshTimeWindow = 20000

export const useAuthModule = () => {
    const [data, setData] = useState<AuthData>({ isAuthenticated: false, expirationTime: null, sessionData: null });
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (data.isAuthenticated) {
            debug("user is authenticated fetching session data")
            getSession();
        }
    }, [data.isAuthenticated])


    useEffect(() => {
        debug("setting timeout for next refresh")
        if (data.expirationTime) {
            const random = (Math.random() * 10000)+10000;
            const now = Date.now();
            debug(`now is ${now}, random is ${random}, next expiration time is ${data.expirationTime}`)
            if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
            const timeoutInMilliseconds = data.expirationTime - now - random;
            debug("timeout set for next refresh in %d", timeoutInMilliseconds)
            debug(`timeout should trigger at ${new Date(now + timeoutInMilliseconds)}`)

            if (timeoutInMilliseconds <= 0) {
               refreshToken();
               return
            }

            timeoutIdRef.current = setTimeout(() => {
                debug(`timeout triggered at ${new Date()}`)
                refreshToken();
            }, timeoutInMilliseconds);
        }

        return () => {
            debug("clearing timeout")
            if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
        }
    }, [data.expirationTime])

    const handleTokenExpireValidation = async (payloadExpirationTime: number) => {

        if (payloadExpirationTime && payloadExpirationTime <= Date.now() / 1000) {
            debug("refreshing expired token")
            await refreshToken()
        }
        
        else if (payloadExpirationTime && payloadExpirationTime > Date.now() / 1000) {
            debug("token is still valid setting session and next refresh time")
            setData((prev) => ({ ...prev, isAuthenticated: true, expirationTime: payloadExpirationTime ? payloadExpirationTime * 1000 : null }))
        }
        
        else {
            debug("token is invalid clearing session")
            setData({ sessionData: null, isAuthenticated: false, expirationTime: null })
        }
    }



    const onLoad = async () => {
        debug("onLoad setting up session")
        const token = Cookies.get('sid')
        const trustedDevice = localStorage.getItem('trustedDevice') 

        if (!token) {
            debug("token not found clearing session")
            clearSession();
            return
        }
        else {
            const payload = jwtDecode(token)

            if(!payload.exp){
                debug("token not found clearing session")
                clearSession();
                return
            }

            debug("checking trusted device")
            if ((!trustedDevice || trustedDevice == 'false') && payload.exp < (Date.now() - 60 * 60 * 1000) / 1000) {
                    debug("token expired for more than an hour on untrusted device clearing session")
                    clearSession();
                    return
            }

            await handleTokenExpireValidation(payload.exp)
          
        }
    }

    useEffect(() => {
        onLoad()
    }, [])


    const refreshToken = async () => {
        try {
            debug("refreshing token")
            const token = Cookies.get('sid');
            if (!token) {
                clearSession();
                return;
            }

            const payload = jwtDecode(token as string);
            debug("checking if token is still valid %d", payload.exp)
            if (payload.exp && payload.exp * 1000 > Date.now() + randomRefreshTimeWindow) {
                debug("Updating the next refresh time")
                setData((prev) => ({
                    ...prev,
                    isAuthenticated: true,
                    expirationTime: payload.exp ? payload.exp * 1000 : null,
                }));
                return;
            }

            debug("getting new token from server");
            const response = await refresh();
            if (response.code == '200') {
                debug("refreshed token successfully")
                const newToken = Cookies.get('sid');
                const newPayload = jwtDecode(newToken as string);
                if (newPayload.exp) {
                    debug("updating the session data")
                    setData((prev) => ({
                        ...prev,
                        isAuthenticated: true,
                        expirationTime: newPayload.exp ? newPayload.exp * 1000 : null,
                    }));
                }
            }
            return response;
        } catch (error) {
            debug("error in refreshing token", error)
            console.log('error', error);
        }
    };


    const getSession = async () => {
        debug("fetching session data")
        const session = await sessionData();
        if (session.data) {
            if (session.data.trustedDevice) {
                localStorage.setItem('trustedDevice', 'true')
            }
            setData((prev) => ({ ...prev, sessionData: session.data }))
        }
    }


    const clearSession = () => {
        debug("clearing session")

        AppCookies.forEach(cookieName => {
            Cookies.remove(cookieName, { domain: 'dataphone.cloud' });
        });

        setData((prev) => ({ isAuthenticated: false, expirationTime: null, sessionData: null }))
        window.localStorage.clear()
        
        // if (window.location.origin !== `${import.meta.env.REACT_APP_LOGIN_PORTAL}`) {
        //     window.location.href = `${import.meta.env.REACT_APP_LOGIN_PORTAL}/login?redirectUrl=${window.location.href}`
        // }
    }

    const logout = async () => {
        try {
            debug("logging out user")
            const response = await logoutUser();
            clearSession()
            return response
        } catch (error) {
            clearSession()
            debug("error in logging out user", error)
            console.log("error", error)
        }
    }

    const login = async (credentials: LoginCredentials) => {
        debug("logging in user ", credentials.email)
        const response = await loginUser(credentials);
    

        if (response.code == 200) {
            const token = Cookies.get('sid')
            const payload = jwtDecode(token as string)
            if (payload.exp) {
                setData((prev) => ({ ...prev, isAuthenticated: true, expirationTime: payload.exp ? payload.exp * 1000 : null }))
            }
            
            if(response.return_to && response.return_to !== ""){
                window.location.href = response.return_to
            }
        }
        return response
    }
    return { data, login, logout }
}
export default useAuthModule;

