import { setToken } from "@/helpers/CookieHelper";
import { SignIn } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";


interface LoginResponse {
    flag: boolean,
    message: string,
    token: string,
    userId: string
}

async function Login({username, password}: { username: string, password: string }) {
    const response = await SignIn(username, password);

    const LoginResponse : LoginResponse = response.data;

    await setToken(LoginResponse.token);
    return LoginResponse;
}


export function useLoginMutate() {
    return useMutation({
        mutationFn: Login,
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        }
    })

}