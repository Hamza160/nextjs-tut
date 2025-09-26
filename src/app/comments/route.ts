import {comments} from "@/app/comments/data";
import {NextRequest} from "next/server";

export async function GET(req: NextRequest)
{
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query ? comments.filter(comment => comment.text.includes(query)) : comments;
    return Response.json(filteredComments);
}

export async function POST(res:Request)
{
    const comment = await  res.json()

    const newComment = {
        id: comments.length + 1 as number,
        text: comment.text as string,
    }

    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}