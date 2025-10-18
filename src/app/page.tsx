"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import './home.css'
import './globals.css'
export default function Home() {
 
  return (
    <>
   <section className = "bg-[url('/background/space.png')] bg-cover bg-center w-full h-screen  flex justify-around items-center  sm-flex-col ">

    <div className="gradient2 aspect-[1/1] w-auto  flex items-center justify-center flex-col gap-6 rounded-lg ">
      <div className="  w-auto aspect-[1/1] flex bg-[black] text-center flex-col items-center justify-center p-6 lg:p-20">
   
<h1 className="xl:text-[1.5rem]   lg:text-[2rem] md:text-[1.6rem]  text-[1.2rem] text-[#00ffae] m-6 ">
  Перетвори слова в шістнадцятковий та двійковий код
</h1>
<h2 className="xl:text-[1.3rem] lg:text-[1.5rem] md:text-[1.4rem] text-[1rem] text-[1rem] text-[#00ffae]">
  Побач, як текст стає даними
</h2>

  

   </div>
   </div>

   </section>
   <section className = "gradient3  w-full h-screen  flex justify-center items-center ">
 
   <div className="flex items-center justify-center flex-col">
<h2 className="xl:text-[1.5rem]   lg:text-[2rem] md:text-[1.8rem]  text-[1.2rem] text-center w-full font-bold  text-[#00ffae] font-semibold">
    Кодування тексту: ISO-8859-5, Windows-1251, KOI8-U
  </h2>
<div className="w-full  flex flex-wrap justify-center items-center">
  <div className="hover text-center md:w-80 lg:w-90 w-40 min-h-40 bg-[white] bg-[white] aspect-[2/1] rounded text-[gray] font-semibold m-3 flex justify-center items-center hover:bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#1f2937] hover:transition-all duration-1000 ">
  <p className="xl:text-[1.3rem] lg:text-[1.5rem] md:text-[1.6rem] text-[1rem] ">
    🔧 Введи слово — отримай шістнадцяткове представлення
    </p>
  </div>

  <div className="hover md:w-80 text-center lg:w-90 w-40 min-h-40 bg-[white] bg-[white] aspect-[2/1] rounded text-[gray] font-semibold m-3 flex justify-center items-center ">
  <p className="xl:text-[1.3rem] lg:text-[1.5rem] md:text-[1.6rem] text-[1rem]">
    🧩 Перевір, як кожна літера виглядає в двійковій системі
    </p>
  </div>

  <div className="hover md:w-80 p-6 text-center  lg:w-90 w-40 min-h-40 bg-[white] bg-[white] aspect-[2/1] rounded text-[gray] font-semibold m-3 flex justify-center items-center ">
  <p className="xl:text-[1.3rem] lg:text-[1.5rem] md:text-[1.6rem] text-[1rem]">
    🧠 Навчися бачити текст як набір байтів
    </p>
  </div>

  </div>
</div>

   </section>
    <section className="bg-black bg-cover w-full min-h-screen flex flex-col md:flex-row justify-around items-center flex-wrap px-4 py-8 gap-8">
  {/* Блок 1 */}
  <div className="flex flex-col items-center text-center max-w-sm bg-gray">
    <h2 className="text-[#00ffae] text-[1.5rem] md:text-[1.7rem] mb-4">1</h2>
    <div className="w-[50%] md:w-[50%] rounded-full overflow-hidden hover:w-[80%] transition-all duration-1000">
      <Image
        src="/man.png"
        layout="responsive"
        width={1980}
        height={1080}
        alt="woman is smart"
        style={{ borderRadius: '16px' }}
      />
    </div>
    <h3 className="text-[#00ffae] text-[1.2rem] md:text-[1.5rem] mt-4">Введи слово</h3>
  </div>

  {/* Блок 2 */}
  <div className="flex flex-col items-center text-center max-w-sm">
    <h2 className="text-[#00ffae] text-[1.5rem] md:text-[1.7rem] mb-4">2</h2>
    <div className="w-[50%] md:w-[50%] rounded-full overflow-hidden hover:w-[80%] transition-all duration-1000">
      <Image
        src="/table.png"
        layout="responsive"
        width={1980}
        height={1080}
        alt="woman is Ready"
        style={{ borderRadius: '16px' }}
      />
    </div>
    <h3 className="text-[#00ffae] text-[1.2rem] md:text-[1.5rem] mt-4">Перетвори його в HEX/BIN</h3>
  </div>

  {/* Блок 3 */}
  <div className="flex flex-col items-center text-center max-w-sm">
    <h2 className="text-[#00ffae] text-[1.5rem] md:text-[1.7rem] mb-4">3</h2>
    <div className="w-[50%] md:w-[50%] rounded-full overflow-hidden hover:w-[80%] transition-all duration-1000">
      <Image
        src="/smile.png"
        layout="responsive"
        width={1980}
        height={1080}
        alt="woman is chill"
        style={{ borderRadius: '16px' }}
      />
    </div>
    <h3 className="text-[#00ffae] text-[1.2rem] md:text-[1.5rem] mt-4">Насолоджуйся магією кодування</h3>
  </div>
</section>

<section className="w-full h-screen bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#1f2937] py-16 px-4 sm:px-8 md:px-16 text-white flex flex-col justify-center items-center">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#00ffae] mb-8">
      💬 Відгуки наших користувачів
    </h2>

    <div className="flex gap-8 justify-center items-center flex-wrap ">
      {/* Відгук 1 */}
      <div className="w-[50%] bg-[#1e293b] xl:w-[30%] p-6 rounded-xl shadow-lg border aspect-[1/1] border-[#00ffae]">
        <p className="text-sm sm:text-base md:text-[1.6rem] text-gray-200 mb-4">
          “Неймовірно швидко! Ввів текст — і вже через секунду отримав HEX-код. Сайт працює бездоганно.”
        </p>
        <p className="text-[#00ffae]  md:text-[1.4rem] font-semibold">— Андрій, Львів</p>
      </div>

      {/* Відгук 2 */}
      <div className=" w-[50%] xl:w-[30%]  bg-[#1e293b] p-6 rounded-xl shadow-lg border aspect-[1/1] border-[#00ffae]">
        <p className="text-sm sm:text-base text-gray-200 mb-4  md:text-[1.6rem]">
          “Зручний інтерфейс, нічого зайвого. Просто, швидко і точно. Рекомендую всім, хто працює з кодуванням тексту.”
        </p>
        <p className="text-[#00ffae] font-semibold  md:text-[1.4rem]">— Олена, Харків</p>
      </div>

      {/* Відгук 3 */}
      <div className=" w-[50%] xl:w-[30%] bg-[#1e293b] p-6 rounded-xl shadow-lg border  aspect-[1/1] border-[#00ffae]">
        <p className="text-sm sm:text-base text-gray-200 mb-4  md:text-[1.6rem]">
          “Цей сервіс став частиною мого щоденного інструментарію. HEX-переклад ще ніколи не був таким простим.”
        </p>
        <p className="text-[#00ffae] font-semibold  md:text-[1.4rem]">— Максим, Київ</p>
      </div>
    </div>
  </div>
</section>

<section className = "w-full h-screen flex  bg-[green] bg-[url('/background/city.png')] bg-cover bg-center bg-no-repeat justify-center ">
<div className="bg-green flex justify-center items-center w-full flex-col gap-10 text-[#00ffae]">
  <h2 className = "text-[2rem]  w-full flex text-center justify-center items-center">Почни перекладати текст на HEX прямо зараз</h2>
  <div className="flex justify-center  items-center w-full gap-10 text-[#00ffae] h-[10%] ">
<button className="w-[20%] h-[100%] bg-[gray] hover:bg-[#00ffae] transition rounded-lg hover:transition-all hover:text-[gray] duration-1000  md:text-[1.6rem]">Windows-1251</button>
<button className="w-[20%] h-[100%] bg-[gray] hover:bg-[#00ffae] transition rounded-lg hover:transition-all hover:text-[gray] duration-1000 md:text-[1.6rem] ">Iso-8859-5</button>
<button className="w-[20%] h-[100%] bg-[gray] hover:bg-[#00ffae] transition rounded-lg hover:transition-all hover:text-[gray] duration-1000  md:text-[1.6rem]">KOI-8</button>
</div>
</div>
</section>
   </>
  );
}
