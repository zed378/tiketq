import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// components
import PageLoader from "../../component/molecules/PageLoader";
import Hero from "../../component/organisms/Hero";

// assets
import "./Home.module.css";

function Home() {
  const [loaded, setLoaded] = useState(true);

  // const nav = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return loaded ? (
    <div className="flex flex-col gap-2 items-center w-full h-full dark:bg-neutral-800 dark:text-white">
      <Hero />
    </div>
  ) : (
    <PageLoader />
  );
}

export default Home;
