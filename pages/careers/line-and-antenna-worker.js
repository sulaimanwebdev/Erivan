import Head from 'next/head'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TemplateForm from '../../components/TemplateForm';
import ScrollToTop from '../../components/ScrollToTop';

export default function Lineman() {

  return (
    <>
    <Head>
      <title>Erivan</title>
    </Head>

    <div className="bg-dark-main text-content-main">
      <Header/>

      <div className="relative w-full"> 
      <img src="/images/athena-worker.png" className='grayscale w-full h-full object-cover object-center absolute top-0 left-0' alt="cover" />
      <div className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 flex items-center justify-center"><img src="/images/lines.svg" alt="lines" /></div>
      <div className="gradient-bg2 absolute top-0 left-0 w-full h-full"></div>
      <div className="mainCont relative z-10 flex items-center justify-center flex-col text-center h-auto py-[80px] md:min-h-[500px]">
      <div className='heading font-[Audiowide] text-[40px] sm6:text-[50px] sm3:text-[60px] sm:text-[70px] leading-[120%] uppercase'>line and antenna<br className='hidden md:flex'/> worker</div>
      </div>
      </div>


       <div className="mainCont mt-[80px] md:mt-[120px]">
       <div className='heading font-[Audiowide] text-[35px] sm10:text-[40px] sm:text-[60px] text-center'>DESCRIPTION</div>
       <div className="text-[17px] mx-auto max-w-[1100px] mt-8 sm:mt-12 leading-[28px]">Linemen install lines and antennas for major carriers’ cellular networks. They inspect security equipment and materials that ensure personal safety. They must be able to work at heights, on cell towers and roofs of buildings. Linemen do physical, outdoor work.</div>
       </div>


       <div className="mainCont grid grid-cols-1 lg4:grid-cols-2 gap-6 mt-[100px] lg4:mt-[140px]">
           <div className="bg-form-main rounded-[24px] p-6">
             <div className='text-white font-[500] text-[22px]'>Requirements</div>
             <div className='flex gap-4 flex-col mt-5'>
                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Be willing and able to work at heights</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Possess a Class 5 driving license</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Be in good physical shape</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Possess a high school (secondary) diploma ( DES in Quebec)</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Be willing to travel</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Have all experience or training required for telecommunications line work.</div>
                  </div>
             </div>

           </div>




           <div className="bg-form-main rounded-[24px] p-6">
             <div className='text-white font-[500] text-[22px]'>Required Skills</div>
             <div className='flex gap-4 flex-col mt-5'>
                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Reliability</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Punctuality</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Resourcefulness</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Versatility</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Teamwork skills</div>
                  </div>


             </div>

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
