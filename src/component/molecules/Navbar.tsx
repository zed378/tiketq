import { useState } from "react";
import { useNavigate } from "react-router-dom";

// component
import DarkModeToggle from "../atoms/darkModeToggle";
import Drawer from "./Drawer";

// icons
import { HiOutlineHome } from "react-icons/hi2";
import { LuHotel } from "react-icons/lu";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { IoBusOutline, IoMenuSharp } from "react-icons/io5";
import { PiUserCircleDashed } from "react-icons/pi";

// image
import logo from "../../assets/logo.png";

export default function Navbar() {
  const nav = useNavigate();
  const [current, setCurrent] = useState("home");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full 3xl:py-5 3xl:px-8 2xl:py-4 2xl:px-7 xl:py-4 xl:px-7 lg:py-3 lg:px-6 xs:py-3 xs:px-5 flex justify-between">
      <img
        src={logo}
        alt={logo}
        srcSet={logo}
        className="3xl:h-10 2xl:h-9 xl:h-8 lg:h-7 xs:h-7 cursor-pointer"
      />

      <div className="flex items-center 2xl:gap-2 xs:gap-0">
        <DarkModeToggle size="3xl:scale-[80%] 2xl:scale[75%] xl:scale-[70%] lg:scale-[65%] xs:scale-[70%] " />

        <div
          className="bg-slate-200 dark:bg-neutral-600 text-slate-400 2xl:p-2 xs:p-1 rounded-md outline outline-1 outline-slate-400 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <IoMenuSharp />
        </div>

        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <p
            className={`cursor-pointer flex items-center gap-1 hover:text-sky-800 ${
              current === "home"
                ? "text-sky-700 dark:text-sky-300 underline decoration-2 decoration-solid underline-offset-4"
                : "text-white"
            }`}
            onClick={() => {
              setCurrent("home");
              nav("/");
            }}
          >
            <HiOutlineHome size={20} />
            Home
          </p>
          <p
            className={`cursor-pointer flex items-center gap-1 hover:text-sky-800 ${
              current === "hotel"
                ? "text-sky-700 dark:text-sky-300 underline decoration-2 decoration-solid underline-offset-4"
                : "text-white"
            }`}
            onClick={() => {
              setCurrent("hotel");
              nav("/hotel");
            }}
          >
            <LuHotel size={20} />
            Tempat Menginap
          </p>
          <p
            className={`cursor-pointer flex items-center gap-1 hover:text-sky-800 ${
              current === "bill"
                ? "text-sky-700 dark:text-sky-300 underline decoration-2 decoration-solid underline-offset-4"
                : "text-white"
            }`}
            onClick={() => {
              setCurrent("bill");
              nav("/bill");
            }}
          >
            <LiaMoneyBillWaveSolid size={20} />
            Tagihan & Isi Ulang
          </p>
          <p
            className={`cursor-pointer flex items-center gap-1 hover:text-sky-800 ${
              current === "hotel"
                ? "text-sky-700 dark:text-sky-300 underline decoration-2 decoration-solid underline-offset-4"
                : "text-white"
            }`}
            onClick={() => {
              setCurrent("hotel");
              nav("/hotel");
            }}
          >
            <IoBusOutline size={20} />
            Transportasi
          </p>
          <p
            className={`cursor-pointer flex items-center gap-1 hover:text-sky-800 ${
              current === "akun"
                ? "text-sky-700 dark:text-sky-300 underline decoration-2 decoration-solid underline-offset-4"
                : "text-white"
            }`}
            onClick={() => {
              setCurrent("akun");
              nav("/akun");
            }}
          >
            <PiUserCircleDashed size={20} />
            Akun
          </p>
        </Drawer>
      </div>
    </div>
  );
}
