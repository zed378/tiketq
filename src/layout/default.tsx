import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="w-screen h-screen m-0 p-0">
      <Outlet />
    </div>
  );
}
