'use client'
import { useEffect, useState } from "react"
import type { ReactElement } from 'react';
export default function Windows(){
    const [words, setWords] = useState("")
        //const [translate, setTranslate] = useState<string[]>();
const [translate, setTranslate] = useState<ReactElement[]>([]);

    const [splitWords, setSplitWords] = useState("")
const [letters, setLetters] = useState<Record<string, { hex: string; binary: string }>>({});
    useEffect(()=>{
        const getData = async()=> {
        const data = await fetch('/letter2.json')
        const readyData = await data.json()
        console.log(readyData)
        const windows = await readyData["iso_8859_5"]
        console.log(windows)
        setLetters(await windows)
          setTimeout(()=>{
            console.log(letters)
          }, 3000
        )
        const splitLine  = words.split('');
 const hex = splitLine.map((part)=>{
    const hex2 = letters[String(part)]?.hex
    return hex2
  })
  console.log(hex)
        }
    getData() },[]
    )
 

   return(
    <>
    <section className="bg-[gray] w-full h-screen flex justify-center items-center flex-col gap-6">
      <div className="flex flex-col justify-center items-center bg-[#00ffae] p-6 rounded-lg gap-3">
    <h2 className="text-[gray]">Введіть слово</h2>
    <input className = "bg-black text-white" onChange={
    (e)=>{
    setWords(e.target.value)
   
    }}></input>
    <p className="text-[gray]">Ваші слова: {words}</p>
    <button className = "bg-black text-white p-4 rounded-lg" onClick={
        ()=>{
            const getTranslation = () =>{
 const splitLine  =  words.split('');
 const hex = splitLine.map((part)=>{
    const hex2 = letters[String(part)]?.hex
    const translation = part + '-' + hex2
    return translation
  })
  console.log(hex)
  setTranslate(hex.map((e, index)=>{
  return <p key = {index} >{e}</p>
}
  ))
} 
getTranslation()
        }
    }>Перекласти
    </button>
    <div className="flex flex-col ">
        <p className="text-[gray]">Ваші слова в iso-8859-5:</p>
        <div className="flex flex-col ">
            {translate}
            </div>
        </div>
        </div>
    </section>
    </>
   )
}