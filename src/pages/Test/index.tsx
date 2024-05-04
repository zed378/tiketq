import { useNavigate } from "react-router-dom";

export default function Test() {
  const nav = useNavigate();
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-500">
      <h1
        className="cursor-pointer text-red-400 text-2xl"
        onClick={() => nav("/test")}
      >
        Test
      </h1>
    </div>
  );
}
