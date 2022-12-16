import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

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



      <div className="mainCont mt-[100px] lg4:mt-[140px] flex lg4:items-center lg4:justify-center flex-col-reverse lg4:flex-row gap-10 lg4:gap-20">
         <img src="/images/careers2.png" className='grayscale h-[450px] xl:h-[500px] object-cover rounded-[16px]' alt="careers" />
         <div className='max-w-[600px]'>
         <img src="/images/logo12.svg" className='mb-4 w-[45px]' alt="logo" />
         <div className="mt-7 text-[19px] font-[500] leading-[29px]">We are committed to remaining accessible to our customers. We want to be able to answer your questions and allay your concerns, in addition to listening to your needs and comments.</div>
         <div className="mt-2 text-[19px] font-[500] leading-[29px]">Help us to maintain our level of excellence, and to surpass ourselves again!</div>
         </div>
      </div>



      <div className="max-w-[1200px] mx-auto">
      <div className="mainCont pt-16 pb-0 mt-[80px] sm:mt-[140px]">
          <div className='heading font-[Audiowide] text-[45px] sm3:text-[60px] text-center mb-16'>CONTACT US</div>

        <div className="grid grid-cols-2 gap-10">
            <div>
            <div className='flex items-start gap-6'>
                <div className='translate-y-1.5'><svg width="22" height="26" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18.8999L13.95 13.9499C14.9289 12.9709 15.5955 11.7236 15.8656 10.3658C16.1356 9.00795 15.9969 7.60052 15.4671 6.32148C14.9373 5.04244 14.04 3.94923 12.8889 3.18009C11.7378 2.41095 10.3844 2.00043 9 2.00043C7.61557 2.00043 6.26222 2.41095 5.11109 3.18009C3.95996 3.94923 3.06275 5.04244 2.53292 6.32148C2.00308 7.60052 1.86442 9.00795 2.13445 10.3658C2.40449 11.7236 3.07111 12.9709 4.05 13.9499L9 18.8999ZM9 21.7279L2.636 15.3639C1.37734 14.1052 0.520187 12.5016 0.172928 10.7558C-0.17433 9.00995 0.00390685 7.20035 0.685099 5.55582C1.36629 3.91129 2.51984 2.50569 3.99988 1.51677C5.47992 0.527838 7.21998 0 9 0C10.78 0 12.5201 0.527838 14.0001 1.51677C15.4802 2.50569 16.6337 3.91129 17.3149 5.55582C17.9961 7.20035 18.1743 9.00995 17.8271 10.7558C17.4798 12.5016 16.6227 14.1052 15.364 15.3639L9 21.7279ZM9 10.9999C9.53044 10.9999 10.0391 10.7892 10.4142 10.4141C10.7893 10.0391 11 9.53035 11 8.99992C11 8.46949 10.7893 7.96078 10.4142 7.58571C10.0391 7.21064 9.53044 6.99992 9 6.99992C8.46957 6.99992 7.96086 7.21064 7.58579 7.58571C7.21072 7.96078 7 8.46949 7 8.99992C7 9.53035 7.21072 10.0391 7.58579 10.4141C7.96086 10.7892 8.46957 10.9999 9 10.9999ZM9 12.9999C7.93914 12.9999 6.92172 12.5785 6.17158 11.8283C5.42143 11.0782 5 10.0608 5 8.99992C5 7.93906 5.42143 6.92164 6.17158 6.17149C6.92172 5.42135 7.93914 4.99992 9 4.99992C10.0609 4.99992 11.0783 5.42135 11.8284 6.17149C12.5786 6.92164 13 7.93906 13 8.99992C13 10.0608 12.5786 11.0782 11.8284 11.8283C11.0783 12.5785 10.0609 12.9999 9 12.9999Z" fill="white"/></svg></div>
                <div className='text-[17px] leading-[24px]'>
                    <div>839 chemin du Fer-à-Cheval,<br/>Sainte-Julie, QC J3E 1Y2</div>
                    <div className='mt-2'>1060 Jayson Ct<br/>Mississauga, ON L4W 2V5</div>
                    <div className='mt-2'>9-4709 14 Street NE<br/>Calgary, AB T2E 6S4</div>
                </div>
            </div>
            </div>

            <ContactForm/>
        </div>
        
      </div>
      </div>



      <Footer/>

    </div>
    </>
  )
}
