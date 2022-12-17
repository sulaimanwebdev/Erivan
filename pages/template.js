import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";
import TemplateForm from '../components/TemplateForm';

export default function Template() {

  return (
    <>
    <Head>
      <title>Erivan</title>
    </Head>

    <div className="bg-dark-main text-content-main">
      <Header/>

      <div className="relative w-full"> 
      <img src="/images/clerk.png" className='grayscale w-full h-full object-cover object-center absolute top-0 left-0' alt="cover" />
      <div className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 flex items-center justify-center"><img src="/images/lines.svg" alt="lines" /></div>
      <div className="gradient-bg2 absolute top-0 left-0 w-full h-full"></div>
      <div className="mainCont relative z-10 flex items-center justify-center flex-col text-center h-auto py-[80px] min-h-[500px]">
           <div className='heading font-[Audiowide] text-[45px] sm9:text-[50px] sm:text-[70px] leading-[120%]'>WAREHOUSE CLERK</div>
      </div>
      </div>


       <div className="maiCont mt-[120px]">
       <div className='heading font-[Audiowide] text-[40px] sm:text-[60px] text-center'>DESCRIPTION</div>
       <div className="text-[17px] mx-auto max-w-[1100px] mt-8 sm:mt-12 leading-[28px]">Warehouse clerks are responsible for all activities and functions related to general warehouse work, contributing to the efficiency of the department by carrying out order preparation, handling, and verification, as well as seeing to the loading and unloading of trucks. Clerks ensure that deliveries and shipping are completed within deadlines, in good condition, and according to client instructions.<br/><br/>They also participate in the general maintenance of the warehouse, and carries out duties reliably and in accordance with norms. Clerks also act as drivers and carry out deliveries, following existing requirements and time frames.</div>
       </div>


       <div className="mainCont grid grid-cols-2 gap-6 mt-[140px]">
           <div className="bg-form-main rounded-[24px] p-6">
             <div className='text-white font-[500] text-[22px]'>Requirements</div>
             <div className='flex gap-4 flex-col mt-5'>
                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Hold a high school diploma (DES)</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Have a minimum 12 months experience working as a warehouse clerk/day labourer or cargo handler</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Experience driving forklift (an asset)</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Have completed the WHMIS training programs (an asset)</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Hold a class 3 license</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Have good physical skills</div>
                  </div>
             </div>

           </div>




           <div className="bg-form-main rounded-[24px] p-6">
             <div className='text-white font-[500] text-[22px]'>Required Skills</div>
             <div className='flex gap-4 flex-col mt-5'>
                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Resourcefulness</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Autonomy</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Reliability</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Sociability</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Ability to take initiative</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Teamwork skills</div>
                  </div>
             </div>

           </div>

       </div>



       <div className="max-w-[900px] mx-auto">
       <div className="mainCont mt-[80px]">
         <TemplateForm/>
       </div>
       </div>


      <Footer/>

    </div>
    </>
  )
}
