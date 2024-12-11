import Image from "next/image";
import Header from './components/header'
import Footer from './components/footer'
import Slider from "./components/swiper";

export default function Home() {
  return (
    <body>
      <Header />
      <main className="bg-[#F8FFFF] flex flex-col justify-center items-center">

        <h1 className="text-[#1E959B] font-bold vs:w-[236px] vs:text-center vs:mt-[24px] text-[32px]">РАЗРАБОТКА IT-ПРОДУКТОВ</h1>
        <p className="vs:w-[320px] vs:text-[14px] vs:mt-[14px] z-10">Разработаем проект с нуля,
          доработаем текущий проект или усилим вашу
          ИТ-команду лучшими разработчиками на рынке</p>
        <button className="rounded-[20px] w-[232px] h-[70px] bg-[#F05670] text-[#fff] vs:mt-[152px] z-10">НАЧАТЬ НОВЫЙ ПРОЕКТ</button>
        {/* <Slider/> */}
        {/* Здесь должен быть свайпер */}
        <div className="w-full h-[90px] bg-[#1E959B] mt-[163px] z-10"></div> 
        <div className="w-full h-[195px] mt-[90px]"></div>
      </main>
      <Footer />



    </body>

  );
}
