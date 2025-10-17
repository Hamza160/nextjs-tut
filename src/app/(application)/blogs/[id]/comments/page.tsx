import React from 'react';

export default async function CommentsPage({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
  return (
    <div>All comments of {id} blog</div>
  );
}

