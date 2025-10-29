"use client"
import React, {ReactNode} from 'react';
import MyServerComponent from "@/app/MyServerComponent";

export default function Child({children}: {children?: ReactNode}) {
    console.log('Child Component');
    return (
        <div>
            {children}
            <MyServerComponent/>
        </div>
    );
}

