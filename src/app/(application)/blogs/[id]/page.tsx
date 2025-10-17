import type { Metadata } from 'next';
import React from 'react';
import {notFound} from "next/navigation";
import {isNumber} from "node:util";
export async function generateMetadata({params}: {params:Promise<{id:string}>}): Promise<Metadata>{
    const {id} = await params
    return {
        title: `Blog ${id}`,
    }
}

export default async function BlogDetails({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    if(!/^\d+$/.test(id)){
        notFound();
    }
    return (
    <div>Blog Details for {id}</div>
  );
}

