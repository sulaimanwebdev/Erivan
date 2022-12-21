import Head from 'next/head'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TemplateForm from '../../components/TemplateForm';
import ScrollToTop from '../../components/ScrollToTop';

export default function ConstructionWorker() {

  return (
    <>
    <Head>
      <title>Erivan</title>
    </Head>

    <div className="bg-dark-main text-content-main">
      <Header/>

      <div className="relative w-full"> 
      <img src="/images/construction-worker.png" className='grayscale w-full h-full object-cover object-center absolute top-0 left-0' alt="cover" />
      <div className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 flex items-center justify-center"><img src="/images/lines.svg" alt="lines" /></div>
      <div className="gradient-bg2 absolute top-0 left-0 w-full h-full"></div>
      <div className="mainCont relative z-10 flex items-center justify-center flex-col text-center h-auto py-[80px] md:min-h-[500px]">
           <div className='heading font-[Audiowide] text-[35px] sm6:text-[40px] sm2:text-[50px] sm:text-[70px] leading-[120%] uppercase'>Construction worker</div>
      </div>
      </div>


     

       <div className="max-w-[900px] mx-auto mt-[80px]">
       <div className="mainCont">
         <TemplateForm/>
       </div>
       </div>


      <Footer/>

    </div>

    <ScrollToTop/>
    
    </>
  )
}
