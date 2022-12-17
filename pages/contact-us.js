import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactInfo from '../components/ContactInfo';

export default function ContactUs() {

  return (
    <>
    <Head>
      <title>Erivan</title>
    </Head>

    <div className="bg-dark-main text-content-main">
      <Header/>

      <div className="relative w-full"> 
      <img src="/images/engineers.png" className='grayscale w-full h-full object-cover object-center absolute top-0 left-0' alt="cover" />
      <div className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 flex items-center justify-center"><img src="/images/lines.svg" alt="lines" /></div>
      <div className="gradient-bg2 absolute top-0 left-0 w-full h-full"></div>
      <div className="mainCont relative z-10 flex items-center justify-center flex-col text-center h-auto py-[80px]">
           <div className='heading font-[Audiowide] text-[45px] sm9:text-[50px] sm:text-[70px] leading-[120%]'>CONTACT US</div>
           <div className='max-w-[750px]'>
           <div className='text-[17px] sm3:text-[20px] leading-[36px] mt-5 text-white'>We appreciate your taking the time to learn more about Erivan-Gecom.</div>
           <div className='text-[17px] sm3:text-[20px] leading-[36px] mt-3 text-white'>We aim to become your partner of choice for the success of your projects, because our success depends on yours.</div>
           </div>
      </div>
      </div>



      <div className="mainCont mt-[100px] lg4:mt-[140px] flex lg4:items-center lg4:justify-center flex-col-reverse lg4:flex-row gap-10 lg4:gap-20">
         <img src="/images/tower4.png" className='grayscale h-[450px] xl:h-[650px] object-cover rounded-[16px]' alt="tower" />
         <div className='lg4:max-w-[500px]'>
         <img src="/images/logo12.svg" className='mb-4 w-[45px]' alt="logo" />
         <div className="mt-7 text-[21px] font-[500] leading-[29px]">We are committed to remaining accessible to our customers. We want to be able to answer your questions and allay your concerns, in addition to listening to your needs and comments.</div>
         <div className="mt-5 text-[21px] font-[500] leading-[29px]">Help us to maintain our level of excellence, and to surpass ourselves again!</div>
         </div>
      </div>



      <div className="max-w-[1100px] mx-auto">
      <div className="mainCont pt-16 pb-0 mt-[80px] lg4:mt-[140px]">
          <div className='heading font-[Audiowide] text-[45px] sm3:text-[60px] text-center mb-16'>CONTACT US</div>

        <div className="grid grid-cols-1 md4:grid-cols-2 lg:grid-cols-[450px,1fr] gap-14">

            
            <div className='hidden md4:block'><ContactInfo/></div>
            <div className='hidden md4:block'><ContactForm/></div>


            <div className='block md4:hidden'><ContactForm/></div>
            <div className='block md4:hidden'><ContactInfo/></div>

            
        </div>
        
      </div>
      </div>



      <Footer/>

    </div>
    </>
  )
}
