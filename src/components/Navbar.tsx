"use server"
import React from 'react'
import Image from 'next/image'
import samplePFP from "../../public/img/pfp.jpeg"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/dist/server/api-utils'
import SignOut  from './SignOut.tsx'

export default async function Navbar() {
    const supabase = createServerComponentClient( { cookies });
    const { data: { session }} = await supabase.auth.getSession();

    if (!session) {
        console.log("no session")
    } else {
        console.log("session yes")
    }

    return (
    <div className="py-4 px-8 flex justify-center items-center select-none bg-background/70 sticky top-0 z-[9999] backdrop-filter backdrop-blur-md shadow-2xl shadow-secondary/10">
    <div className="flex-1">
        <Link href="/">
            <span className="py-1 px-4 font-majorMono normal-case text-xl font-bold">swApify</span>
        </Link>
    </div>
    <div className="flex flex-row justify-center items-center gap-8">   
        {session ?
        <>
                <div className="flex justify-center items-center gap-8">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost hover:bg-primary/10 btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image src={samplePFP} alt="profilepic" width={40} height={40}/>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <SignOut></SignOut>

            </div>    
        </> : 
        <>
            <div className="flex justify-center items-center font-inconsolata  text-lg gap-4">
                <Link href="/login">
                    <button className="hover:bg-accent hover:text-background text-text uppercase ease-in-out duration-500 border-2 shadow-lg shadow-accent/20 hover:shadow-accent/40 border-primary py-2 px-6 rounded-md">
                        Login
                    </button>
                </Link>
                <Link href="/signup">
                <button className="hover:bg-accent hover:text-background text-text uppercase ease-in-out duration-500 border-2 shadow-lg shadow-accent/20 hover:shadow-accent/40 border-primary py-2 px-6 rounded-md">
                    Signup
                </button>
                </Link>
            </div>
        </>}
        
        
        
    </div>
    </div>
  )
}
