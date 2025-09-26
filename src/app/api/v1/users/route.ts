import {redirect} from "next/navigation";

export async function GET() {
    redirect("/api/v2/users");
    const usersList = [
        {id: 1, fullName: "John Doe", email: "john@gmail.com"},
        {id: 2, fullName: "Jane Doe", email: "jane@gmail.com"},
        {id: 3, fullName: "Hamza Ashraf", email: "hamza@gmail.com"},
    ];

    return new Response(JSON.stringify(usersList));
}