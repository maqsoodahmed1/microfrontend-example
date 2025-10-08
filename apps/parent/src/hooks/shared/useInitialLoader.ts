import { useAuthModule } from "./useAuthHook";


export function useInitialLoader() {
    const { data: session, logout } = useAuthModule();

    console.log({ session })

}