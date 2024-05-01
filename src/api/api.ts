import xior from "xior";


export const api = xior.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

