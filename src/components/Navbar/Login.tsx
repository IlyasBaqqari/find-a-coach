'use client'

import {signIn} from "next-auth/react";

export default function Login() {

    return (
        <button onClick={() => signIn()} className="px-10 text-xl font-light hover:underline">👤 Sign in</button>
    );

}