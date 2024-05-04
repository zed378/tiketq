import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ServiceCardType } from "../../type/component/molecules/ServiceCard";

const ServiceCard: FC<ServiceCardType> = ({ title, desc, icon, link }) => {
  const nav = useNavigate();

  const imgData = "url(" + icon + ")";

  return (
    <div
      className="w-full h-40 rounded-lg overflow-hidden flex items-center relative cursor-pointer bg-gradient-to-b from-sky-700 to-sky-500 outline outline-1 outline-sky-400 "
      onClick={() => nav(link)}
    >
      <div
        className="h-full w-[35%] bg-cover bg-top"
        style={{ backgroundImage: imgData }}
      ></div>

      {/* <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-neutral-900 to-neutral-700 opacity-75 hover:opacity-65 "></div> */}

      <div className="relative h-full w-[65%] z-20 px-3 py-1">
        <h1 className="text-xl text-sky-200">{title}</h1>
        <p className="text-sm text-white font-thin">{desc}</p>
        <button className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-500 rounded-md text-white opacity-85 hover:opacity-100 hover:bg-cyan-700 ">
          PESAN
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
