import React from 'react';
import {serverSideFunction} from "@/utils/server-utils";

export default function ServerRoute() {
    const result = serverSideFunction();
    return (
        <div>
            <h1>ServerRoute {result}</h1>
        </div>
    );
}

