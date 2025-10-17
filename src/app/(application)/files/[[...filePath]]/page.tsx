import React from 'react';

/*
* [...filePath] // Required Catch All Route
* [[...filePath]] // Optional Catch All Routes
* */
export default async function FilePath({params}:{params:Promise<{filePath:string[]}>}) {
    const {filePath} = await params

    return (
        <div>FilePath {filePath?.join("/")}</div>
    );
}

