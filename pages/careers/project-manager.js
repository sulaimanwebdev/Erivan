import Head from 'next/head'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TemplateForm from '../../components/TemplateForm';
import ScrollToTop from '../../components/ScrollToTop';

export default function ProjectManager() {

  return (
    <>
    <Head>
      <title>Erivan</title>
    </Head>

    <div className="bg-dark-main text-content-main">
      <Header/>

      <div className="relative w-full"> 
      <img src="/images/manager.png" className='grayscale w-full h-full object-cover object-center absolute top-0 left-0' alt="cover" />
      <div className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 flex items-center justify-center"><img src="/images/lines.svg" alt="lines" /></div>
      <div className="gradient-bg2 absolute top-0 left-0 w-full h-full"></div>
      <div className="mainCont relative z-10 flex items-center justify-center flex-col text-center h-auto py-[80px] md:min-h-[500px]">
           <div className='heading font-[Audiowide] text-[40px] sm9:text-[50px] sm:text-[70px] leading-[120%] uppercase'>Project Manager</div>
      </div>
      </div>


       <div className="mainCont mt-[80px] md:mt-[120px]">
       <div className='heading font-[Audiowide] text-[35px] sm10:text-[40px] sm:text-[60px] text-center'>DESCRIPTION</div>
       <div className="text-[17px] mx-auto max-w-[1100px] mt-8 sm:mt-12 leading-[28px]">Project Managers carry out the planning and preparation of timelines (schedules) in collaboration with the worksite coordinator. They manage the entire coordination of projects that have been attributed to them and are their responsibility. They check plans and contracts in order to ensure that they are in good order and conform to norms.<br/><br/>They participate in contract start-up meetings in order to know what is required, and have several responsibilities: drawing up requests for modifications and doing follow-ups, awarding, where applicable, sub-contracts in their sector of activities, and doing follow-up, carrying out various follow-up activities in order to ensure the smooth progress of projects (meeting deadlines, respecting budgets and extras etc. Project managers are the primary contacts among clients, expert consultants, and other human resources involved in projects. They also carry out other connected or complementary tasks at the request of their superiors, and represent the company at worksite meetings. Estimators must evaluate plans and quotes, make worksite visits, select sub-contractors, calculate materials and make requests for costs and detailed bids.</div>
       </div>


       <div className="mainCont grid grid-cols-1 lg4:grid-cols-2 gap-6 mt-[100px] lg4:mt-[140px]">
           <div className="bg-form-main rounded-[24px] p-6">
             <div className='text-white font-[500] text-[22px]'>Requirements</div>
             <div className='flex gap-4 flex-col mt-5'>
                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Possess a Bachelors or DEC (College Degree) in civil engineering or architecture</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Have 3 to 5 years of project management experience</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Able to read plans and quotes</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Be familiar with the construction industry</div>
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
                    <div className='text-[17px] leading-[30px]'>Independence</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Knowledge of MS Office</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Organizational skills and sense of responsibility</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Good interpersonal skills</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Teamwork skills</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Motivated and proactive attitude</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                    <div className='text-[17px] leading-[30px]'>Ability to manage a large amount of information</div>
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
