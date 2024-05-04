import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { useEffect } from "react";

import DefaultLayout from "./layout/default";

function App() {
  useEffect(() => {
    if (localStorage?.theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {routes.map((item) => {
            return (
              <Route
                key={item.id}
                index={item.path === "/" ? true : false}
                path={item.path}
                element={<item.component />}
              />
            );
          })}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
