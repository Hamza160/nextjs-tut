import {User} from "@/model/user-mode";

export async function createUser(payload: { name: string; email: string; password: string }) {
    try{
        await User.create(payload)
    }catch(error){
        console.error(err);
    }
}