import { useEffect, useRef } from "react";

import { useDispatch } from "react-redux";

import { useAuthModule } from "./useAuthHook";
import { AppDispatch } from "src/sharedStore";

import { setSessionData } from "../../store/slices/session.slice";
import { fetchDefinitions } from "../../../../reports/src/store/slices/filter.slice";


export function useInitialLoader() {
    const { data: session, logout } = useAuthModule();
    const dispatch = useDispatch<AppDispatch>();

    const sessionProcessedRef = useRef(false);

    useEffect(() => {
        if (session?.sessionData && !sessionProcessedRef.current) {
            sessionProcessedRef.current = true;
            dispatch(setSessionData(session as any));
        }
    }, [session, dispatch]);

}