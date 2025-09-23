import {comments} from "@/app/comments/data";
import {NextRequest} from "next/server";

export async function GET()
{
    return Response.json(comments);
}

