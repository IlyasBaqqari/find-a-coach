'use client'

import {signOut} from "next-auth/react";
import type {Session} from "next-auth";
import Image from "next/image";

export default function Logout({session}: {session: Session}) {

    return (
    <div className='flex w-64 items-center justify-end px-10'>
        <Image src={`${session.user.image}`} alt={`${session.user.name}`} onClick={() => signOut()} width='0' height='0' sizes='100vw' className='w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-white hover:cursor-pointer hover:border-blue-500 focus:border-blue-500' />
    </div>
    );

}