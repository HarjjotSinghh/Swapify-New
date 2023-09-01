import React from 'react'
import Image from 'next/image'
import samplePFP from "../../public/img/pfp.jpeg"

export default function Navbar() {
  return (
    <div className="navbar bg-background/40 sticky top-0 z-[9999] backdrop-filter backdrop-blur-3xl">
    <div className="flex-1">
        <a className="btn btn-ghost hover:bg-primary/10 py-1 px-4 font-majorMono normal-case text-xl">swApify</a>
    </div>
    <div className="flex-none gap-4">
        <div className="btn btn-ghost hover:bg-primary/10">Hello</div>
        
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
    </div>
    </div>
  )
}
