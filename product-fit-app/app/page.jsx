'use client'
import Image from "next/image";
import Header from './components/header'
import Footer from './components/footer'
import Sliper from "./components/swiper";
import { createContext } from "react";
import Sliper2 from "./components/swiper2";
import Agitation from "./components/agit";
import Start from "./components/start";
import Projects from "./components/projects";
import Orders from "./components/orders";
import Submit from "./components/submit";

export default function Home() {
  return (
    <body>
      <Header />
      <main className="bg-[#F8FFFF] flex flex-col justify-center items-center">
        <Start />
        <Sliper />
        <Sliper2 />
        <Agitation />
        <Projects />
        <Orders />
        <Submit />
      </main>
      <Footer />
    </body>
  );
}
