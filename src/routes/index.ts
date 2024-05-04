import { arrayPath } from "../type/routes";

// components
import Home from "../pages/Home";
import Test from "../pages/Test";

// icons
import { RiHome2Line } from "react-icons/ri";
import { GrTest } from "react-icons/gr";

export const routes: arrayPath["arrayOfObject"] = [
  {
    id: 1,
    path: "/",
    component: Home,
    auth: false,
    icon: RiHome2Line,
  },
  {
    id: 2,
    path: "/test",
    component: Test,
    auth: false,
    icon: GrTest,
  },
];
