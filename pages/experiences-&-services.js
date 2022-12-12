import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ExperiencesServices() {

  return (
    <>
    <Head>
      <title>Erivan</title>
    </Head>

    <div className="bg-dark-main text-content-main">
      <Header/>

    
      <div className="relative w-full"> 
      <img src="/images/tower-bottom.svg" className='w-full h-full object-cover object-center absolute top-0 left-0' alt="about" />
      <div className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 flex items-center justify-center"><img src="/images/lines.svg" alt="lines" /></div>
      <div className="gradient-bg2 absolute top-0 left-0 w-full h-full"></div>
      <div className="mainCont relative z-10 flex items-center justify-center flex-col text-center h-auto py-[80px]">
          <div className='heading font-[Audiowide] text-[50px] sm3:text-[60px] sm:text-[70px] leading-[120%]'>EXPERIENCE &<br className='hidden sm:flex'/> SERVICES</div>
           <div className='max-w-[500px]'>
           <div className='text-[20px] leading-[36px] mt-5 text-white'>We develop creative, comprehensive and sustainable engineering solutions.</div>
           <button className='mx-auto flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-6 py-3.5 mt-5'>JOIN THE ADVENTURE <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z" fill="white"/></svg></button>
           </div>
      </div>
      </div>


      <div className="mainCont flex md:justify-between flex-col md:flex-row gap-6 mt-[140px]">
        <div className='heading font-[Audiowide] text-[40px] sm3:text-[60px] leading-[120%] uppercase'>The experience<br/> that makes the<br/> difference</div>
        <div className='text-[17px] leading-[30px] max-w-[600px]'>Well established in the telecommunications industry, <span className='text-white font-[900]'>Erivan</span> has cutting-edge expertise in civil engineering and project design.<br/><br/>Our specialized team, mainly composed of professional engineers graduates who are subject to a rigorous code of ethics, operates according to procedures recognized by the industry.<br/><br/>Our experience to direct our efforts towards optimal efficiency, in order to ensure full compliance with costs and schedule for each project,while preserving the safety of the public, customers and employees, is why our customers and partners love us!</div>
      </div>

      <div className="mainCont relative my-[50px] w-full h-[400px]">
        <img src="/images/engineers2.svg" className='grayscale w-full h-full object-cover object-center rounded-[16px]' alt="engineers" />
        <img src="/images/logo.svg" className='w-[250px] absolute bottom-[30px] right-[50px] z-10' alt="logo" />
      </div>

      <div className="mainCont flex items-center justify-between gap-16">
       <img src="/images/logo12.svg" className='w-[60px]' alt="logo" />
       <div className='text-[17px] leading-[30px]'>With its general contractor’s license, <span className='text-white font-[900]'>Erivan</span> is equipped with a qualified, committed, and passionate team, always in continuous training, and which remains at the cutting edge of industry standards.<br/><br/>Under the federal jurisdiction, the company is accredited by the main operators in the Canadian market, and therefore authorized to carry out public and institutional contracts in the vast majority of Canadian provinces, and even some American states. <span className='text-white font-[900]'>Erivan</span> thus aims to be a one-stop-shop for the design and implementation of all types of projects.</div>
      </div>

      <div className="mainCont mt-[80px]">
        <div className="card-gradient h-[500px] rounded-[24px] px-10 py-5"></div>      
      </div>


      <Footer/>

    </div>
    </>
  )
}
