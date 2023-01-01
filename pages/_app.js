import "../styles/globals.css";
import {useState, useEffect} from "react";

function MyApp({ Component, pageProps }) {
  const [loader, setloader] = useState('opacity-100 visible')
 
  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    setTimeout(() => {
        setloader('opacity-0 invisible')
        document.body.classList.remove('overflow-hidden')
    }, 1800);
  }, [])
  return <div>
        <div className={`w-full h-screen fixed top-0 left-0 bg-dark-main flex items-center justify-center px-[25px] transition-[1s] z-[999999999] ${loader}`}><img src="/images/animation.gif" className='w-[150px]' alt="animated logo" /></div>
    
    <Component {...pageProps} />
  </div>;
}

export default MyApp;
