import "../styles/globals.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [loader, setloader] = useState("opacity-100 visible");

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    setTimeout(() => {
      setloader("opacity-0 invisible");
      document.body.classList.remove("overflow-hidden");
    }, 2000);
  }, []);
  return (
    <div>
      <div
        className={`w-full h-screen fixed top-0 left-0 bg-dark-main flex items-center justify-center px-[25px] transition-[1s] z-[999999999] ${loader} `}
      >
        <div className="flex flex-col items-center">
          <img
            src="/images/logos/Icon.jpg"
            className="w-[150px] loader"
            alt="animated logo"
          />
          <img
            src="/images/logo-text.svg"
            className="w-[200px] loader mt-6"
            alt="animated logo"
          />
        </div>
      </div>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
