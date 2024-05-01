'use server';

import { cookies } from "next/headers";

export async function setToken(token: string) {
    cookies().set("token", token, {
        secure: true,
        httpOnly: true,
        expires: Date.now() + 5 * 60 * 60 * 1000,
        path: "/",
        sameSite: "strict"
    });
}



