import React from 'react';
import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";

export default function RegisterPage() {
  return (
      <div className="flex flex-col justify-center items-center m-4">
          <h1 className="text-3xl my-3">Hey, time to sign up</h1>
          <RegisterForm />
          <p className="my-3">Already have an account?</p>
          <Link href="/" className="mx-2 underline">Login</Link>
      </div>
  );
}

