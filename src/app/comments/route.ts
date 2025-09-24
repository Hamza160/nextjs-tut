import {comments} from "@/app/comments/data";

export async function GET()
{
    return Response.json(comments);
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
        statusCode:201
    });
}