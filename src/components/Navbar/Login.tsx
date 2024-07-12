'use client'

import {signIn} from "next-auth/react";

export default function Login() {

    return (
        <button onClick={() => signIn("google", { callbackUrl: '/profile' })} className="w-64 px-10 text-xl font-light hover:underline">👤 Sign in</button>
    );

}