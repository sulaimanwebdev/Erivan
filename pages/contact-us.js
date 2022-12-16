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



      <div className="max-w-[1100px] mx-auto">
      <div className="mainCont pt-16 pb-0 mt-[80px] sm:mt-[140px]">
          <div className='heading font-[Audiowide] text-[45px] sm3:text-[60px] text-center mb-16'>CONTACT US</div>

        <div className="grid grid-cols-[450px,1fr] gap-14">
            <div>
            <div className='flex items-start gap-6 border-b border-gray-main pb-6'>
                <div className='translate-y-1.5'><svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 25.8666L18.6 19.2666C19.9052 17.9613 20.794 16.2983 21.1541 14.4878C21.5141 12.6773 21.3292 10.8008 20.6228 9.09539C19.9163 7.39 18.7201 5.93239 17.1852 4.90687C15.6504 3.88135 13.8459 3.33398 12 3.33398C10.1541 3.33398 8.34962 3.88135 6.81478 4.90687C5.27994 5.93239 4.08367 7.39 3.37722 9.09539C2.67077 10.8008 2.48589 12.6773 2.84594 14.4878C3.20599 16.2983 4.09481 17.9613 5.4 19.2666L12 25.8666ZM12 29.6373L3.51467 21.152C1.83646 19.4737 0.693582 17.3355 0.230571 15.0078C-0.232439 12.68 0.00520915 10.2672 0.913465 8.07451C1.82172 5.88181 3.35979 4.00767 5.33318 2.6891C7.30656 1.37053 9.62664 0.666748 12 0.666748C14.3734 0.666748 16.6934 1.37053 18.6668 2.6891C20.6402 4.00767 22.1783 5.88181 23.0865 8.07451C23.9948 10.2672 24.2324 12.68 23.7694 15.0078C23.3064 17.3355 22.1636 19.4737 20.4853 21.152L12 29.6373ZM12 15.3333C12.7072 15.3333 13.3855 15.0524 13.8856 14.5523C14.3857 14.0522 14.6667 13.3739 14.6667 12.6666C14.6667 11.9594 14.3857 11.2811 13.8856 10.781C13.3855 10.2809 12.7072 9.99998 12 9.99998C11.2928 9.99998 10.6145 10.2809 10.1144 10.781C9.61429 11.2811 9.33334 11.9594 9.33334 12.6666C9.33334 13.3739 9.61429 14.0522 10.1144 14.5523C10.6145 15.0524 11.2928 15.3333 12 15.3333ZM12 18C10.5855 18 9.22896 17.4381 8.22877 16.4379C7.22857 15.4377 6.66667 14.0811 6.66667 12.6666C6.66667 11.2522 7.22857 9.8956 8.22877 8.89541C9.22896 7.89521 10.5855 7.33331 12 7.33331C13.4145 7.33331 14.771 7.89521 15.7712 8.89541C16.7714 9.8956 17.3333 11.2522 17.3333 12.6666C17.3333 14.0811 16.7714 15.4377 15.7712 16.4379C14.771 17.4381 13.4145 18 12 18Z" fill="white"/></svg></div>
                <div className='text-[17px] leading-[24px]'>
                    <div>839 chemin du Fer-à-Cheval,<br/>Sainte-Julie, QC J3E 1Y2</div>
                    <div className='mt-2'>1060 Jayson Ct<br/>Mississauga, ON L4W 2V5</div>
                    <div className='mt-2'>9-4709 14 Street NE<br/>Calgary, AB T2E 6S4</div>
                </div>
            </div>


            <div className='flex items-start gap-6 border-b border-gray-main pb-6 mt-6'>
                <div className='translate-y-1.5'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.488 10.2427C9.73912 12.4406 11.5594 14.2609 13.7573 15.512L14.936 13.8613C15.1255 13.5959 15.4058 13.4092 15.7237 13.3364C16.0417 13.2637 16.3752 13.31 16.6613 13.4667C18.5471 14.4972 20.6296 15.117 22.772 15.2853C23.1064 15.3118 23.4185 15.4634 23.6461 15.7098C23.8737 15.9561 24 16.2793 24 16.6147V22.564C24.0001 22.8941 23.8777 23.2125 23.6565 23.4576C23.4353 23.7027 23.1311 23.857 22.8027 23.8907C22.096 23.964 21.384 24 20.6667 24C9.25333 24 0 14.7467 0 3.33333C0 2.616 0.036 1.904 0.109333 1.19733C0.143006 0.86893 0.297312 0.564694 0.542386 0.343512C0.78746 0.12233 1.10587 -7.11437e-05 1.436 3.1023e-08H7.38533C7.72075 -4.20247e-05 8.04386 0.126335 8.29024 0.353934C8.53662 0.581533 8.68817 0.893631 8.71467 1.228C8.88297 3.37039 9.50277 5.45291 10.5333 7.33867C10.69 7.62475 10.7363 7.95832 10.6636 8.27626C10.5908 8.5942 10.4041 8.87446 10.1387 9.064L8.488 10.2427ZM5.12533 9.36667L7.65867 7.55733C6.93971 6.00546 6.44714 4.35845 6.196 2.66667H2.68C2.672 2.888 2.668 3.11067 2.668 3.33333C2.66667 13.2747 10.7253 21.3333 20.6667 21.3333C20.8893 21.3333 21.112 21.3293 21.3333 21.32V17.804C19.6415 17.5529 17.9945 17.0603 16.4427 16.3413L14.6333 18.8747C13.9049 18.5916 13.1973 18.2575 12.516 17.8747L12.4387 17.8307C9.82344 16.3423 7.65771 14.1766 6.16933 11.5613L6.12533 11.484C5.74254 10.8027 5.40838 10.0951 5.12533 9.36667Z" fill="white"/></svg></div>
                <div className='text-[17px] leading-[24px]'>
                    <div>647-616-8494 (ON)</div>
                    <div className='mt-2'>647-616-8494 (ON)</div>
                    <div className='mt-2'>403-475-5888 (AB)</div>
                </div>
            </div>



            <div className='flex items-start gap-6 border-b border-gray-main pb-6 mt-6'>
                <div className='translate-y-[2px]'><svg width="25" height="21" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00033 0H26.0003C26.3539 0 26.6931 0.140476 26.9431 0.390524C27.1932 0.640573 27.3337 0.979711 27.3337 1.33333V22.6667C27.3337 23.0203 27.1932 23.3594 26.9431 23.6095C26.6931 23.8595 26.3539 24 26.0003 24H2.00033C1.6467 24 1.30756 23.8595 1.05752 23.6095C0.807468 23.3594 0.666992 23.0203 0.666992 22.6667V1.33333C0.666992 0.979711 0.807468 0.640573 1.05752 0.390524C1.30756 0.140476 1.6467 0 2.00033 0ZM24.667 5.65067L14.0963 15.1173L3.33366 5.62133V21.3333H24.667V5.65067ZM4.01499 2.66667L14.0817 11.5493L24.003 2.66667H4.01499Z" fill="white"/></svg></div>
                <div className='text-[17px] leading-[24px]'>admin@erivan-gecom.com</div>
            </div>


            <div className='flex items-start gap-6 border-b border-gray-main pb-6 mt-6'>
                <div className='text-[17px] leading-[24px]'>RBQ: 8323-2017-22</div>
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
