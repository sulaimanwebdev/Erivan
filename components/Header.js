import React, {useState} from 'react'
import Link from 'next/link'

const Header = () => {

  const [navBar, setnavBar] = useState('translate-x-full')
  return (
    <>
      <div className="mainCont py-8 flex items-center justify-between gap-3">
           <div className='flex items-center lg3:gap-14 w-full lg3:w-auto'>
            <Link href="/" className='w-fit'><img src="/images/logo.svg" className="w-[200px] lg2:w-auto" alt="logo" /> </Link>
            <div className={`${navBar} lg3:translate-x-0 transition flex gap-7 px-[25px] z-[999] flex-col lg3:flex-row bg-dark-main lg3:bg-transparent fixed top-0 right-0 w-full sm2:w-[400px] pb-7 lg3:pb-0 pt-[92px] lg3:pt-0 sm2:border-l-2 border-content-main lg3:border-0 overflow-y-auto max-h-screen h-screen lg3:h-auto lg3:w-auto bg- lg3:relative lg3:top-auto lg3:right-auto`}>
             <Link href="/" className='font-semibold'>ABOUT US</Link>
             <Link href="/" className='font-semibold'>EXPERIENCES & SERVICES</Link>
             <Link href="/" className='font-semibold'>CAREERS</Link>
             <Link href="/" className='font-semibold'>OUR INVOLVEMENT</Link>
             <Link href="/" className='font-semibold'>CONTACT</Link>

             <div className="flex sm2:hidden items-center gap-5">
               <div className="flex items-center gap-1 text-white">
                <button className='font-[900]'>EN</button>
                <div>|</div>
                <button>FR</button>
               </div>

               <div className='relative cursor-pointer rounded-full border-2 flex items-center justify-between border-white border-opacity-[0.16] px-2 w-[72px] h-[37px] bg-[#020510]'>
               <div className="absolute top-1/2 -translate-y-1/2 scale-125 left-0 bg-white rounded-full w-[30px] h-[30px]"></div>
               <svg width="16" height="16" className='z-[9]' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.25333 0.5C5.76209 0.957747 5.36807 1.50975 5.09479 2.12308C4.82151 2.73641 4.67457 3.3985 4.66272 4.06985C4.65088 4.7412 4.77438 5.40806 5.02585 6.03065C5.27732 6.65324 5.65162 7.2188 6.12641 7.69359C6.6012 8.16838 7.16676 8.54268 7.78935 8.79415C8.41194 9.04562 9.0788 9.16912 9.75015 9.15728C10.4215 9.14543 11.0836 8.99849 11.6969 8.72521C12.3103 8.45193 12.8623 8.05791 13.32 7.56667C13.108 11.0567 10.2107 13.8207 6.66733 13.8207C2.98467 13.8207 0 10.836 0 7.154C0 3.61067 2.764 0.713333 6.25333 0.5Z" fill="#020510"/></svg>
               <svg width="19" height="19" className='z-[9]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99984 12.0001C6.93897 12.0001 5.92156 11.5787 5.17141 10.8285C4.42126 10.0784 3.99984 9.06095 3.99984 8.00008C3.99984 6.93922 4.42126 5.9218 5.17141 5.17165C5.92156 4.42151 6.93897 4.00008 7.99984 4.00008C9.0607 4.00008 10.0781 4.42151 10.8283 5.17165C11.5784 5.9218 11.9998 6.93922 11.9998 8.00008C11.9998 9.06095 11.5784 10.0784 10.8283 10.8285C10.0781 11.5787 9.0607 12.0001 7.99984 12.0001ZM7.33317 0.666748H8.6665V2.66675H7.33317V0.666748ZM7.33317 13.3334H8.6665V15.3334H7.33317V13.3334ZM2.34317 3.28608L3.28584 2.34341L4.69984 3.75741L3.75717 4.70008L2.34317 3.28675V3.28608ZM11.2998 12.2427L12.2425 11.3001L13.6565 12.7141L12.7138 13.6567L11.2998 12.2427ZM12.7138 2.34275L13.6565 3.28608L12.2425 4.70008L11.2998 3.75741L12.7138 2.34341V2.34275ZM3.75717 11.3001L4.69984 12.2427L3.28584 13.6567L2.34317 12.7141L3.75717 11.3001ZM15.3332 7.33342V8.66675H13.3332V7.33342H15.3332ZM2.6665 7.33342V8.66675H0.666504V7.33342H2.6665Z" fill="white"/></svg>
               </div>
           </div>

             <button onClick={()=> {setnavBar('translate-x-full')}} className="flex lg3:hidden absolute top-[30px] right-[25px]"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button>
            </div>
           </div>

           <div className="hidden sm2:flex items-center gap-3">
               <div className="flex items-center gap-1 text-white">
                <button className='font-[900]'>EN</button>
                <div>|</div>
                <button>FR</button>
               </div>

               <div className='relative cursor-pointer rounded-full border-2 flex items-center justify-between border-white border-opacity-[0.16] px-2 w-[72px] h-[37px] bg-[#020510]'>
               <div className="absolute top-1/2 -translate-y-1/2 scale-125 left-0 bg-white rounded-full w-[30px] h-[30px]"></div>
               <svg width="16" height="16" className='z-[9]' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.25333 0.5C5.76209 0.957747 5.36807 1.50975 5.09479 2.12308C4.82151 2.73641 4.67457 3.3985 4.66272 4.06985C4.65088 4.7412 4.77438 5.40806 5.02585 6.03065C5.27732 6.65324 5.65162 7.2188 6.12641 7.69359C6.6012 8.16838 7.16676 8.54268 7.78935 8.79415C8.41194 9.04562 9.0788 9.16912 9.75015 9.15728C10.4215 9.14543 11.0836 8.99849 11.6969 8.72521C12.3103 8.45193 12.8623 8.05791 13.32 7.56667C13.108 11.0567 10.2107 13.8207 6.66733 13.8207C2.98467 13.8207 0 10.836 0 7.154C0 3.61067 2.764 0.713333 6.25333 0.5Z" fill="#020510"/></svg>
               <svg width="19" height="19" className='z-[9]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99984 12.0001C6.93897 12.0001 5.92156 11.5787 5.17141 10.8285C4.42126 10.0784 3.99984 9.06095 3.99984 8.00008C3.99984 6.93922 4.42126 5.9218 5.17141 5.17165C5.92156 4.42151 6.93897 4.00008 7.99984 4.00008C9.0607 4.00008 10.0781 4.42151 10.8283 5.17165C11.5784 5.9218 11.9998 6.93922 11.9998 8.00008C11.9998 9.06095 11.5784 10.0784 10.8283 10.8285C10.0781 11.5787 9.0607 12.0001 7.99984 12.0001ZM7.33317 0.666748H8.6665V2.66675H7.33317V0.666748ZM7.33317 13.3334H8.6665V15.3334H7.33317V13.3334ZM2.34317 3.28608L3.28584 2.34341L4.69984 3.75741L3.75717 4.70008L2.34317 3.28675V3.28608ZM11.2998 12.2427L12.2425 11.3001L13.6565 12.7141L12.7138 13.6567L11.2998 12.2427ZM12.7138 2.34275L13.6565 3.28608L12.2425 4.70008L11.2998 3.75741L12.7138 2.34341V2.34275ZM3.75717 11.3001L4.69984 12.2427L3.28584 13.6567L2.34317 12.7141L3.75717 11.3001ZM15.3332 7.33342V8.66675H13.3332V7.33342H15.3332ZM2.6665 7.33342V8.66675H0.666504V7.33342H2.6665Z" fill="white"/></svg>
               </div>
           </div>

           <button onClick={()=> {setnavBar('translate-x-0')}} className='flex lg3:hidden sm2:ml-2'><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg></button>
      </div>

      <div onClick={()=> {setnavBar('translate-x-full')}} className={`fixed left-0 top-0 w-full h-screen bg-black bg-opacity-80 blur-lg z-[99] lg3:hidden ${navBar === "translate-x-0" ? "flex" : "hidden"}`}></div>
    </>
  )
}

export default Header