import React from 'react';

export default async function CommentDetailPage({params}:{params:Promise<{id:string, commentId: string}>}) {
    const {id, commentId} = await params
    return (
    <div>Comment {commentId} of blog {id} </div>
  );
}

