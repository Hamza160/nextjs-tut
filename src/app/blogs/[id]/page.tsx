import type { Metadata } from 'next';
import React from 'react';
export async function generateMetadata({params}: {params:Promise<{id:string}>}): Promise<Metadata>{
    const {id} = await params
    return {
        title: `Blog ${id}`,
    }
}

export default async function BlogDetails({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    return (
    <div>Blog Details for {id}</div>
  );
}

