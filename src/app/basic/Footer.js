import Image from "next/image"
export default function Footer(){
    return(
        <>
<footer className="bg-black text-[#00ffae] py-8 px-4 text-sm relative bottom-0">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center">
    <div>
      <h4 className="text-lg font-semibold mb-2 md:text-[2rem]">Про нас</h4>
      <p className="opacity-80 md:text-[1.6rem]">
        Ми перетворюємо текст у дані, створюючи інтерфейси майбутнього.
      </p>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-2 md:text-[2rem]">Навігація</h4>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline md:text-[1.6rem]">Home</a></li>
        <li><a href="#" className="hover:underline md:text-[1.6rem]">Windows-1251</a></li>
             <li><a href="#" className="hover:underline md:text-[1.6rem]">Iso-8859-5</a></li>
        <li><a href="#" className="hover:underline md:text-[1.6rem]">KOI-8</a></li>
      </ul>
    </div>
<div>
  <h4 className="text-lg font-semibold mb-2 md:text-[2rem]">Соцмережі</h4>
  <div className="flex flex-row items-center gap-4">
    <a href="#" className="hover:text-white transition-colors">
      <div className="w-12 h-12  hover:w-20 transition-h  transition-w duration-500 hover:h-20">
        <Image
          src="/icons/facebook.png"
          layout="responsive"
          width={1980}
          height={1080}
          alt="facebook icon"
        />
      </div>
    </a>

    <a href="#" className="hover:text-white transition-colors">
      <div className="w-12 h-12  hover:w-20 transition-h  transition-w duration-500 hover:h-20">
        <Image
          src="/icons/whatsapp.png"
          layout="responsive"
          width={1980}
          height={1080}
          alt="whatsapp icon"
        />
      </div>
    </a>

    {/* Додай інші іконки тут */}
  </div>
</div>

  </div>
  <div className="mt-8 text-center opacity-60">
    &copy; 2025 CyberText. Усі права захищено.
  </div>
</footer>

        </>
    )
}