'use client'
import Link from "next/link"
import { useState } from "react"
export default function Header(){
    const [menu, setMenu] = useState("hidden")
    return(
        <>
        <nav className={"bg-[#00ffae] w-full  min-h-screen max-h-screen h-screen fixed top-0 right-0 left-0 overflow-hidden z-[9999] transition-all duration-1000" + " " + menu}>
  <button className="flex flex-col justify-center items-center w-10 h-10 gap-1  md:hidden xl:hidden  " onClick = {()=>{
                if(menu == "hidden"){
                document.body.classList.add("overflow-hidden")
                setMenu("")
                }
                else{
setMenu("hidden")
document.body.classList.remove("overflow-hidden")
                }
            }}><span className="w-8 h-[2px] bg-black"></span>
  <span className="w-8 h-[2px] bg-black"></span>
  <span className="w-8 h-[2px] bg-black"></span></button>
             <ul className="flex h-screen w-full items-center justify-center gap-10 flex-col ">
                <li className="text-[black] text-[2rem]"><Link href = "/">Home</Link></li>
                <li className="text-[black] text-[2rem]"><Link href = "/Windows-1251">Windows-1251</Link></li>
                <li className="text-[black] text-[2rem]"><Link href = "/iso_8859_5">Iso-8859-5</Link></li>
                <li className="text-[black] text-[2rem]"><Link href = "/KOI-8">KOI-8</Link></li>
                <li className="text-[black] text-[2rem]"><Link href = "/MyTable">Власна таблиця</Link></li>
            </ul>
        </nav>
        <header className="bg-[#00ffae] w-full  h-[20%] flex  items-center z-[0] ">
            <button className="flex flex-col justify-center items-center w-10 h-10 gap-1  md:hidden" onClick = {()=>{
                if(menu == "hidden"){
                document.body.classList.add("overflow-hidden")
                setMenu("")
                }
                else{
setMenu("hidden")
document.body.classList.remove("overflow-hidden")
                }
            }}><span className="w-8 h-[2px] bg-black"></span>
  <span className="w-8 h-[2px] bg-black"></span>
  <span className="w-8 h-[2px] bg-black"></span></button>
            <span className="text-[black] text-[2rem] ml-10">Name</span>
           
            <ul className="flex h-20 w-full items-center justify-center gap-10  hidden md:flex ">
                <li className="text-[black]  text-[1.3rem]"><Link href = "/">Home</Link></li>
                <li className="text-[black]  text-[1.3rem]"><Link href = "/Windows-1251">Windows-1251</Link></li>
                <li className="text-[black]  text-[1.3rem]"><Link href = "/iso_8859_5">Iso-8859-5</Link></li>
                <li className="text-[black]  text-[1.3rem]"><Link href = "/KOI-8">KOI-8</Link></li>
                <li className="text-[black]  text-[1.3rem]"><Link href = "/MyTable">Власна таблиця</Link></li>
            </ul>
            
        </header>
        </>
    )
}