import React, {useState} from 'react'

const ScrollToTop = () => {

    const [scrollToTop, setscrollToTop] = useState('scale-0');
    

  global?.window && window.addEventListener("scroll", ()=>{
  if (window.scrollY >= 500) {
    setscrollToTop('scale-1')
  } else {
    setscrollToTop('scale-0')
  }
});


  return (
    <>
    {/* scroll to top */}
    <button title="Scroll to top" onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })} className={`${scrollToTop} fixed z-10 bottom-7 right-[25px] transform w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white transition hover:-translate-y-1`}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/></svg></button>
    </>
  )
}

export default ScrollToTop