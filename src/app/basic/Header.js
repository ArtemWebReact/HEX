'use client'
import Link from "next/link"
import { useState } from "react"
export default function Header(){
    const [menu, setMenu] = useState("opacity-0")
    return(
        <>

        <header className="bg-[#00ffae] w-full  h-[20%] flex justify-around items-center">
            <span className="text-[black] text-[2rem]">Name</span>
           
            <ul className="flex h-20 w-full items-center justify-center gap-10  ">
                <li className="text-[black]"><Link href = "/">Home</Link></li>
                <li className="text-[black]"><Link href = "/Windows-1251">Windows-1251</Link></li>
                <li className="text-[black]"><Link href = "/iso_8859_5">Iso-8859-5</Link></li>
                <li className="text-[black]"><Link href = "/KOI-8">KOI-8</Link></li>
                <li className="text-[black]"><Link href = "/MyTable">Власна таблиця</Link></li>
            </ul>
            
        </header>
        </>
    )
}