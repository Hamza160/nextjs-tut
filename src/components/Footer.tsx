"use client"
import React from 'react';

const Footer = () => {
    const [value, setValue] = React.useState<string>("Test value");
    return (
        <div>
            <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
            <h1>Footer</h1>
        </div>
    );
}

export default Footer;
