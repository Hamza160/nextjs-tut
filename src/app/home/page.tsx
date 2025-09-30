
import {auth} from '@/auth'
import {redirect} from "next/navigation";
import Image from "next/image";
import Logout from "@/components/Logout";
export default async function HomePage (){
    const session = await auth();

    if(!session?.user){
        redirect('/')
    }

    const user = session.user!;

    return (
        <div className="flex flex-col items-center m-4">
            <h1 className="text-3xl my-3">{user?.name}</h1>
            <Image
                src={user?.image!}
                alt={user?.name!}
                width={72}
                height={72}
                className="rounded-full"
            />
            <Logout/>
        </div>
    )
}