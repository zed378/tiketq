import { HashLoader } from "react-spinners";

export default function PageLoader() {
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-full opacity-80 bg-slate-300 flex flex-col items-center justify-center">
      <HashLoader color="#122447" size={150} />
    </div>
  );
}
