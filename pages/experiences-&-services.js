import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkSlider from '../components/WorkSlider';

export default function ExperiencesServices() {

  return (
    <>
    <Head>
      <title>Erivan</title>
    </Head>

    <div className="bg-dark-main text-content-main">
      <Header/>

    
      <div className="relative w-full"> 
      <img src="/images/about.png" className='w-full h-full object-cover object-center absolute top-0 left-0' alt="about" />
      <div className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 flex items-center justify-center"><img src="/images/lines.svg" alt="lines" /></div>
      <div className="gradient-bg2 absolute top-0 left-0 w-full h-full"></div>
      <div className="mainCont relative z-10 flex items-center justify-center flex-col text-center h-auto py-[80px]">
          <div className='heading font-[Audiowide] text-[50px] sm3:text-[60px] sm:text-[70px] leading-[120%]'>ABOUT US</div>
           <div className='max-w-[900px]'>
           <div className='text-[20px] leading-[36px] mt-5 text-white'>Founded in 1981 by Pierre Lajeunesse, the company was first known under the sole name of "Erivan". At that time, the company was working in civil engineering and construction of large-scale concrete jobs.</div>
           <div className='font-[Audiowide] text-[28px] my-8 leading-[120%] text-white'>Founded in 1981</div>
           <button className='mx-auto flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-6 py-3.5 mt-5'>JOIN THE ADVENTURE <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z" fill="white"/></svg></button>
           </div>
      </div>
      </div>


      <Footer/>

    </div>
    </>
  )
}
