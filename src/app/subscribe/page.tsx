import React from 'react';
import {sendEmail} from "../../../actions/email";

export default function Subscribe() {
    const onSubmit = async(values)=> {
        await sendEmail(values)
    }
  return (
    <div className="flex items-center justify-center w-full">
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Full Name" className="ring ring-gray-500"/>
            <input type="email" placeholder="Email" className="ring ring-gray-500"/>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

