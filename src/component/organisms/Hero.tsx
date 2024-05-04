import { useState } from "react";

// components
import Navbar from "../molecules/Navbar";

// icons
import { RiHotelFill } from "react-icons/ri";
import { SlPlane } from "react-icons/sl";
import { SiCodeship } from "react-icons/si";
import { TbTrain } from "react-icons/tb";

export default function Hero() {
  const [show, setShow] = useState("hotel");

  return (
    <div className="flex flex-col gap-2 items-center w-full h-full dark:bg-neutral-800 dark:text-white lg:bg-hero-img dark:lg:bg-her-dark xl:bg-top 2xl:bg-center bg-cover ">
      <Navbar />

      <div className="3xl:h-[30%] w-full flex items-center justify-center ">
        <h1 className="3xl:text-6xl text-white">
          Hai sahabat <span className="font-bold text-sky-700">TiketQ</span> mau
          ke mana?
        </h1>
      </div>

      <div className="xl:w-4/5 xl:h-2/5 rounded-lg glass-dark dark:glass-white relative">
        <div className="w-4/5 h-1/6 bg-sky-700 dark:bg-white absolute -top-8 left-1/2 -translate-x-1/2 rounded-lg drop-shadow-xl flex items-center justify-center gap-6 ">
          <div
            className="flex items-center justify-center gap-2 relative text-white dark:text-sky-700 cursor-pointer hover:text-slate-400 dark:hover:text-neutral-400"
            onClick={() => setShow("hotel")}
          >
            <RiHotelFill className="text-3xl" />
            <h1 className="text-xl font-medium">Hotel</h1>
            {show === "hotel" && (
              <span className="w-full h-[1.5px] bg-white dark:bg-sky-700 absolute -bottom-1"></span>
            )}
          </div>

          <div
            className="flex items-center justify-center gap-2 relative text-white dark:text-sky-700 cursor-pointer hover:text-slate-400 dark:hover:text-neutral-400"
            onClick={() => setShow("pesawat")}
          >
            <SlPlane className="text-3xl" />
            <h1 className="text-xl font-medium">Tiket Pesawat</h1>
            {show === "pesawat" && (
              <span className="w-full h-[1.5px] bg-white dark:bg-sky-700 absolute -bottom-1"></span>
            )}
          </div>

          <div
            className="flex items-center justify-center gap-2 relative text-white dark:text-sky-700 cursor-pointer hover:text-slate-400 dark:hover:text-neutral-400"
            onClick={() => setShow("kapal")}
          >
            <SiCodeship className="text-3xl" />
            <h1 className="text-xl font-medium">Tiket Kapal</h1>
            {show === "kapal" && (
              <span className="w-full h-[1.5px] bg-white dark:bg-sky-700 absolute -bottom-1"></span>
            )}
          </div>

          <div
            className="flex items-center justify-center gap-2 relative text-white dark:text-sky-700 cursor-pointer hover:text-slate-400 dark:hover:text-neutral-400"
            onClick={() => setShow("kereta")}
          >
            <TbTrain className="text-3xl" />
            <h1 className="text-xl font-medium">Tiket Kereta</h1>
            {show === "kereta" && (
              <span className="w-full h-[1.5px] bg-white dark:bg-sky-700 absolute -bottom-1"></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
