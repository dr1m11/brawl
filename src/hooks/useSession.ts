import {getAccessToken} from "@/services/auth/auth.helper";

export default function useSession() {
    const isAuth = localStorage.getItem('isAuth') && getAccessToken()
    const user = localStorage.getItem('user')
    // const userBalance =
}