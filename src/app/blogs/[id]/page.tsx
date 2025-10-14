import React from 'react';

export default async function BlogDetails({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    return (
    <div>Blog Details for {id}</div>
  );
}

