import {comments} from "@/app/comments/data";
export async function GET(
        _req:Request,
        {params}:{params:Promise<{id:string}>}) {
        const {id} = await params

        const comment = comments.find((comment) => comment.id === parseInt(id));

        return Response.json(comment)
}
export async function PATCH(req:Request,{params}:{params:Promise<{id:string}>}) {
    const id = (await params).id;
    const body =  await req.json();
    const {text} = body;

    const index = comments.findIndex(comment=> comment.id === parseInt(id));

    comments[index].text = text;

    return Response.json(comments[index]);
}

export async function DELETE(_req:Request,{params}:{params:Promise<{id:string}>}) {
    const id = (await params).id;
    const index = comments.findIndex(comment=> comment.id === parseInt(id));
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment);
}