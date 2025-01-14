import {z} from "zod";

export const User = z.object({
    username:z.string().email(),
    password:z.string(),
    name:z.string() 
})

export const SigninSchema = z.object({
    username:z.string().email(),
    password:z.string()
}); 

export const CreateRoomSchema = z.object({
    name:z.string().min(3).max(20)
})