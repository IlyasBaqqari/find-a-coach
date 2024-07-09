'use client'

import {signOut} from "next-auth/react";
import type {Session} from "next-auth";
import Image from "next/image";

export default function Logout({session}: {session: Session}) {

    return (
    <div className='flex items-center justify-center px-10'>
        <Image src={`${session.user.image}`} alt={`${session.user.name}`} onClick={() => signOut()} width='0' height='0' sizes='100vw' className='w-12 h-12 rounded-full border-2 border-white hover:cursor-pointer hover:border-blue-500 focus:border-blue-500' />
    </div>
    );

}