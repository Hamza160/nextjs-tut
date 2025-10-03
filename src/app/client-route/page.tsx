"use client"
import React from 'react';
import {serverSideFunction} from "@/utils/server-utils";

export default function ClientRoute() {
    const result = serverSideFunction()
    return (
        <div>
            <h1>ClientRoute {result}</h1>
        </div>
    );
}

