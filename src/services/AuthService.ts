import { api } from "@/api/api";


export async function SignIn(username: string, password: string) {
    return await api.post('/auth/signin', {username, password});
}

export async function ValidateToken(token: string){


    try {
        const response = await api.get('/Auth/validatetoken', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data;
    } catch (error) {
        console.log(error);
    }

    

}