"use server"
import React from "react"
// import useMousePosition from "../hooks/useMousePosition";
import landingPageSVG from "../../public/img/landingpagefornow.png";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import config from "../../tailwind.config";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Home() {
  // const { clientX, clientY } = useMousePosition();
  const supabase = createServerComponentClient( { cookies });
    const { data: { session }} = await supabase.auth.getSession();
  return (
    <>
    <Navbar></Navbar>
    <div className="flex justify-center items-center select-none gap-32 p-4 py-24 ">
      <div className='flex justify-center items-start flex-col w-fit z-[99]'>
        <h1 className='text-4xl font-inconsolata text-left mb-[-4px] ml-[10px] font-extralight' style={{filter: `drop-shadow(0px 0px 8px #035e45`}}>Welcome to</h1>
        <h1 className='animate-text text-7xl font-majorMono font-bold bg-gradient-to-r from-teal-500 via-primary to-teal-500 bg-clip-text text-transparent' style={{filter: `drop-shadow(0px 3px 15px #03805e`}}>
          swApify
        </h1>
        <h1 className='text-md font-inconsolata pl-2 pt-8 max-w-[450px] text-justify ' style={{filter: `drop-shadow(0px 0px 8px #035e45`}}>
        {`The perfect platform that empowers you to exchange your skills with others, for absolutely free! Our mission is to create an inclusive community where you can discover new talents, learn valuable skills, and share your expertise with others.`}
        </h1>
        <div className="flex justify-center items-center ml-2 mt-8 gap-6">
          <button className="px-6 py-3  font-inconsolata uppercase hover:text-black text-lg   rounded-xl hover:bg-gradient-to-r from-teal-400 via-primary to-accent bg-none border-accent border-2 hover:border-accent text-text ease-in-out duration-500 shadow-xl shadow-accent/20 hover:shadow-accent/30">
            Get Started
          </button> 
          <span className="text-md text-text font-inconsolata hover:underline underline-offset-2 ease-in-out duration-500 hover:cursor-pointer hover:shadow-md shadow-accent/50"  style={{filter: `drop-shadow(0px 0px 8px #035e45`}}>
            Learn more →
          </span>
        </div>
        
      </div>
      <div className="z-[109] xl:block sm:hidden select-none">
        <div
          className=""
        >
          <Image
            src={landingPageSVG}
            alt="landingpagefornow"
            className="rounded-[40px] w-[600px] h-auto shadow-2xl shadow-primary/10 z-[1000]"
          />
        </div>
      </div>
    </div>

    {/* <div className="opacity-20">
      <div 
        style={{ 
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          pointerEvents: "none",
        }}
        className="blur-[150px] "
      >
        <svg
          width={50}
          height={50}
          viewBox="0 0 50 50"
          style={{
            position: "absolute",
            left: clientX + 50,
            top: clientY - 100,
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            fill: "var(--accent)",
            scale: "500%"
            
          }}
        >
          <circle
            cx="25"
            cy="25"
            r="8"
          />
        </svg>
      </div>
      <div 
        style={{ 
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          pointerEvents: "none",
        }}
        className="blur-[190px] "
      >
        <svg
          width={100}
          height={50}
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            left: clientX + 100,
            top: clientY - 150,
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            fill: "var(--primary)",
            scale: "600%"
          }}
        >
          <circle
            cx="50"
            cy="50"
            r="16"
          />
        </svg>
      </div>
    </div> */}
    
    </>
  )
}
