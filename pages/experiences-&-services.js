import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from '../components/ScrollToTop';

export default function ExperiencesServices() {

  return (
    <>
    <Head>
      <title>Erivan</title>
    </Head>

    <div className="bg-dark-main text-content-main">
      <Header/>

    
      <div className="relative w-full"> 
      <img src="/images/tower-bottom.png" className='w-full h-full object-cover object-center absolute top-0 left-0' alt="cover" />
      <div className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 flex items-center justify-center"><img src="/images/lines.svg" alt="lines" /></div>
      <div className="gradient-bg2 absolute top-0 left-0 w-full h-full"></div>
      <div className="mainCont relative z-10 flex items-center justify-center flex-col text-center h-auto py-[80px]">
          <div className='heading font-[Audiowide] text-[40px] sm6:text-[50px] sm3:text-[60px] sm:text-[70px] leading-[120%]'>EXPERIENCE &<br className='hidden sm:flex'/> SERVICES</div>
           <div className='max-w-[500px]'>
           <div className='text-[20px] leading-[36px] mt-5 text-white'>We develop creative, comprehensive and sustainable engineering solutions.</div>
           <button className='mx-auto flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-6 py-3.5 mt-5'>JOIN THE ADVENTURE <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z" fill="white"/></svg></button>
           </div>
      </div>
      </div>


      <div className="mainCont flex md:justify-center flex-col lg7:flex-row gap-6 xl:gap-12 mt-[100px] lg7:mt-[140px]">
        <div className='heading font-[Audiowide] text-[30px] sm3:text-[40px] sm7:text-[50px] lg6:text-[60px] leading-[120%] uppercase'>The experience<br className='hidden lg6:flex'/> that makes the<br/> difference</div>
        <div className='text-[17px] leading-[30px] lg7:max-w-[600px]'>Well established in the telecommunications industry, <span className='text-white font-[900]'>Erivan</span> has cutting-edge expertise in civil engineering and project design.<br/><br/>Our specialized team, mainly composed of professional engineers graduates who are subject to a rigorous code of ethics, operates according to procedures recognized by the industry.<br/><br/>Our experience to direct our efforts towards optimal efficiency, in order to ensure full compliance with costs and schedule for each project,while preserving the safety of the public, customers and employees, is why our customers and partners love us!</div>
      </div>

      <div className="mainCont relative my-[50px] w-full h-[400px]">
        <img src="/images/engineers2.png" className='grayscale w-full h-full object-cover object-center rounded-[16px]' alt="engineers" />
        <img src="/images/logo.svg" className='w-[250px] absolute bottom-[30px] right-[50px] z-10 hidden sm3:flex' alt="logo" />
      </div>

      <div className="mainCont flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-16">
       <img src="/images/logo12.svg" className='w-[60px]' alt="logo" />
       <div className='text-[17px] leading-[30px]'>With its general contractor’s license, <span className='text-white font-[900]'>Erivan</span> is equipped with a qualified, committed, and passionate team, always in continuous training, and which remains at the cutting edge of industry standards.<br/><br/>Under the federal jurisdiction, the company is accredited by the main operators in the Canadian market, and therefore authorized to carry out public and institutional contracts in the vast majority of Canadian provinces, and even some American states. <span className='text-white font-[900]'>Erivan</span> thus aims to be a one-stop-shop for the design and implementation of all types of projects.</div>
      </div>

      <div className="mainCont mt-[80px]">
        <div className="card-gradient relative overflow-hidden rounded-[24px] px-6 md:px-10 py-10 md:py-16 lg:pl-24">
           <div className="mb-6 rounded-full w-[50px] h-[50px] flex items-center justify-center bg-white relative z-10"><svg width="18" height="25" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.502 19C10.8404 20.5823 9.58232 21.8404 8 22.502C6.41768 21.8404 5.15956 20.5823 4.498 19H6.758C7.084 19.489 7.505 19.912 8 20.243C8.495 19.913 8.916 19.489 9.243 19H11.502ZM14 13.805L16 16.073V18H0V16.073L2 13.805V7.99996C2 4.51696 4.504 1.55296 8 0.454956C11.496 1.55296 14 4.51696 14 7.99996V13.805ZM13.27 16L12 14.56V7.99996C12 5.68196 10.43 3.56996 8 2.57996C5.57 3.56996 4 5.68096 4 7.99996V14.56L2.73 16H13.27ZM8 9.99996C7.46957 9.99996 6.96086 9.78924 6.58579 9.41417C6.21071 9.0391 6 8.53039 6 7.99996C6 7.46952 6.21071 6.96082 6.58579 6.58574C6.96086 6.21067 7.46957 5.99996 8 5.99996C8.53043 5.99996 9.03914 6.21067 9.41421 6.58574C9.78929 6.96082 10 7.46952 10 7.99996C10 8.53039 9.78929 9.0391 9.41421 9.41417C9.03914 9.78924 8.53043 9.99996 8 9.99996Z" fill="#101113"/></svg></div>
           <div className='heading font-[Audiowide] text-[40px] sm8:text-[50px] md:text-[60px] leading-[50px] sm8:leading-[76px] uppercase relative z-10'>Always looking<br className='hidden md:flex'/> forward</div>
           <div className='font-[600] text-[17px] sm8:text-[20px] max-w-[500px] leading-[35px] relative z-10 mt-6'>Constantly expanding our skills and knowledge in the face of technology’s exponential growth!</div>
           <img src="/images/tower3.png" className='absolute bottom-0 right-10 lg:right-36 h-[300px] sm:h-[400px] opacity-30 lg7:opacity-100' alt="tower" />
        </div>      
      </div>


      <div className="mainCont mt-[100px] md:mt-[140px]">
          <div className='heading font-[Audiowide] text-[35px] sm4:text-[40px] sm3:text-[60px] text-center'>OUR SERVICES</div>
          <div className="mt-16">
            <img src="/images/logo12.svg" className='mb-7 w-[35px]' alt="logo" />
            <div className="text-[22px] sm4:text-[25px] sm:text-[30px] text-white font-[600] uppercase w-full border-b border-gray-main pb-4 mb-7">Civil Engineering</div>
            <div className="grid grid-cols-1 md4:grid-cols-2 gap-10 xl:gap-20">
              <div className='flex gap-6 flex-col'>
                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>General carpentry</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Foundations / tower reinforcement</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Telecommunications infrastructure</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Assembly of steel structures</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Supply and assembly for the erection of towers</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Reinforcement of building foundations</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Construction of telecommunications shelters</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Furnishing of commercial premises</div>
                  </div>

              </div>





              <div className='flex gap-6 flex-col'>
                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Construction of telecommunications server rooms</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Complete concrete work</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Complete mechanical work</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Complete air conditioning works</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Complete electrical work</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Earthing work</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Lightning protection work</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Installation of specialized anchors</div>
                  </div>

              </div>

            </div>











            <div className="mt-24">
            <img src="/images/logo12.svg" className='mb-7 w-[35px]' alt="logo" />
            <div className="text-[22px] sm4:text-[25px] sm:text-[30px] text-white font-[600] uppercase w-full border-b border-gray-main pb-4 mb-7">TELECOMMUNICATIONS</div>
            <div className="grid grid-cols-1 md4:grid-cols-2 gap-10 xl:gap-20">
              <div className='flex gap-6 flex-col'>
                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>antennes HSPA, LTE, LTE+, CDMA, UMTS , 3G ,WCDMA ,PCS, IDEN, GSM, etc.</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Waveguide bridges and cable trays</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Telecommunications infrastructure</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Steel structures</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Supply and assembly for the erection of towers</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Strengthening foundations</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Construction of telecommunications shelters</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Furnishing of commercial premises</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Construction of telecommunications rooms</div>
                  </div>

              </div>





              <div className='flex gap-6 flex-col'>
                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Complete concrete work</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Complete mechanical work</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Complete air conditioning works</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Complete electrical work</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Earthing work</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Lightning protection work</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Installation of an In-Building cellular blanket</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Installation of telecommunication equipment</div>
                  </div>



                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Installation of specialized equipment with a crane</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Deployment of full vendor upgrade project</div>
                  </div>



              </div>

            </div>
            </div>











            <div className="mt-24">
            <img src="/images/logo12.svg" className='mb-7 w-[35px]' alt="logo" />
            <div className="text-[22px] sm4:text-[25px] sm:text-[30px] text-white font-[600] uppercase w-full border-b border-gray-main pb-4 mb-7">Engineering + Tests</div>
            <div className="grid grid-cols-1 md4:grid-cols-2 gap-10 xl:gap-20">
              <div className='flex gap-6 flex-col'>
                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Feasibility studies</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Structural analysis</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Design of telecommunications </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Design of steel structures</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Antenna support design</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Civil design</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Project management - turnkey or personalized</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Compliance inspection reports</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Technical drawing, 3D modeling, photostimulation</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Fiber optic fusion</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Electronic frequency sweep</div>
                  </div>

              </div>





              <div className='flex gap-6 flex-col'>
                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Compliance testing - fiber optic and copper</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>OTDR test</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Surge arrester tests</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>PIM tests</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Specialized telecom tests</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Antenna alignment</div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Microwave alignment</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Installation of specialized anchors</div>
                  </div>



                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Validation of cellular network coverage</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Design of the interior cellular cover (In-Building)</div>
                  </div>


                  <div className="flex items-start gap-5">
                    <div className="rounded-full bg-content-main min-w-[13px] min-h-[13px] translate-y-2"></div>
                    <div className='text-[17px] leading-[30px]'>Addition of architectural camouflage for integration of telecommunication elements</div>
                  </div>



              </div>

            </div>
            </div>



          </div>
      </div>

      <Footer/>

    </div>

    <ScrollToTop/>
    </>
  )
}
