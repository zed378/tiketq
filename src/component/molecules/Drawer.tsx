import { FC } from "react";
import { DrawerType } from "../../type/component/molecules/Drawer";

import { TfiClose } from "react-icons/tfi";

const Drawer: FC<DrawerType> = ({ children, isOpen, setIsOpen }) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-50 bg-gray-900 bg-opacity-40 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-md right-0 absolute bg-gradient-to-b from-cyan-400 to-cyan-900 dark:from-neutral-700 dark:to-neutral-900 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-md pb-10 flex flex-col space-y-6 overflow-y-scroll h-full pl-8 pr-4">
          <header className="font-medium mt-4 text-2xl text-sky-700 dark:text-sky-500 ">
            Menu
          </header>

          <div
            className="h-6 w-6 flex items-center justify-center absolute -top-1 right-4 rounded-full outline outline-1 outline-white text-sm text-white cursor-pointer hover:bg-sky-500"
            onClick={() => setIsOpen(false)}
          >
            <TfiClose />
          </div>

          {children}

          <div className="w-full h-auto flex flex-col gap-2">
            <button
              type="button"
              className="text-white bg-gradient-to-b from-sky-400 via-sky-500 to-sky-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 mt-5"
            >
              Login
            </button>

            <button
              type="button"
              className="text-white font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 border border-white border-1 hover:border-2 hover:text-cyan-700 hover:border-cyan-700"
            >
              Register
            </button>
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;
