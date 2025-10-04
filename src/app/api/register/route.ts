import {NextRequest, NextResponse} from "next/server";
import {dbConnect} from "@/lib/mongo";
import bcrypt from "bcryptjs"
import {createUser} from "@/quries/users";

export const POST = async (request: NextRequest) => {
    try {
        const {name, email, password} = await request.json();

        // Create a Database Connection
        await dbConnect();
        // Encrypt the password
        const hashedPassword = await bcrypt.hash(password, 12);
        // Form a DB Payload
        const user = {name, email, password: hashedPassword};
        // Update the DB

        await createUser(user);

        return new NextResponse("User has been registered successfully!", {
            status: 201
        })
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500
        })
    }
}