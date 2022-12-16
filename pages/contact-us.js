import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactUs() {

  return (
    <>
    <Head>
      <title>Erivan</title>
    </Head>

    <div className="bg-dark-main text-content-main">
      <Header/>

      <div className="relative w-full"> 
      <img src="/images/engineers.png" className='grayscale w-full h-full object-cover object-center absolute top-0 left-0' alt="about" />
      <div className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 flex items-center justify-center"><img src="/images/lines.svg" alt="lines" /></div>
      <div className="gradient-bg2 absolute top-0 left-0 w-full h-full"></div>
      <div className="mainCont relative z-10 flex items-center justify-center flex-col text-center h-auto py-[80px]">
           <div className='heading font-[Audiowide] text-[50px] sm3:text-[60px] sm:text-[70px] leading-[120%]'>CONTACT US</div>
           <div className='max-w-[750px]'>
           <div className='text-[17px] sm3:text-[20px] leading-[36px] mt-5 text-white'>We appreciate your taking the time to learn more about Erivan-Gecom.</div>
           <div className='text-[17px] sm3:text-[20px] leading-[36px] mt-3 text-white'>We aim to become your partner of choice for the success of your projects, because our success depends on yours.</div>
           </div>
      </div>
      </div>


      <Footer/>

    </div>
    </>
  )
}
