import Head from 'next/head'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TemplateForm from '../../components/TemplateForm';
import ScrollToTop from '../../components/ScrollToTop';

export default function Carpenter() {

  return (
    <>
    <Head>
      <title>Erivan</title>
    </Head>

    <div className="bg-dark-main text-content-main">
      <Header/>

      <div className="relative w-full"> 
      <img src="/images/carpenter.png" className='grayscale w-full h-full object-cover object-center absolute top-0 left-0' alt="cover" />
      <div className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 flex items-center justify-center"><img src="/images/lines.svg" alt="lines" /></div>
      <div className="gradient-bg2 absolute top-0 left-0 w-full h-full"></div>
      <div className="mainCont relative z-10 flex items-center justify-center flex-col text-center h-auto py-[80px] md:min-h-[500px]">
           <div className='heading font-[Audiowide] text-[40px] sm9:text-[50px] sm:text-[70px] leading-[120%] uppercase'>Carpenter</div>
      </div>
      </div>


       <div className="mainCont mt-[80px] md:mt-[120px]">
       <div className='heading font-[Audiowide] text-[35px] sm10:text-[40px] sm:text-[60px] text-center'>DESCRIPTION</div>
       <div className="text-[17px] mx-auto max-w-[1100px] mt-8 sm:mt-12 leading-[28px]">Carpenters build shelters for telecommunications equipment as well as office space. They carry out all general construction tasks, including renovation and carpentry, as well as installation of specialized wall covering.<br/><br/>They may occasionally be required to paint. Carpenters must be able to read and interpret plans, work orders and drawings. They respect established work procedure guidelines and let the foreman know about anything that does not conform to norms. They carry out other connected tasks at the request of the superior.</div>
       </div>


       <div className="mainCont grid grid-cols-1 lg4:grid-cols-2 gap-6 mt-[100px] lg4:mt-[140px]">
           <div className="bg-form-main rounded-[24px] p-6">
             <div className='text-white font-[500] text-[22px]'>Requirements</div>
             <div className='flex gap-4 flex-col mt-5'>
                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Possess a High School Diploma (DES in Quebec)</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Possess valid carpenter’s certification</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Have 3-5 years relevant experience in carpentry</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Be willing to travel</div>
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
                    <div className='text-[17px] leading-[30px]'>Team Work Ability</div>
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
