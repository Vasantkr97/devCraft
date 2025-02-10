'use server';
import { auth } from "@clerk/nextjs/server";
import { getUser } from "../db/user";


export async function fetchUser() {
    const  { userId } = await auth() 
    console.log(userId);
    const user = userId ? await getUser(userId) : null;
    return user
}