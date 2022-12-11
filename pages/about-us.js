import Head from 'next/head'
import Link from 'next/link'
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkSlider from '../components/WorkSlider';

export default function About() {
  return (
    <>
    <Head>
      <title>Erivan</title>
    </Head>

    <div className="bg-dark-main text-content-main">
      <Header/>

    
      <div className="relative w-full"> 
      <img src="/images/about.png" className='w-full h-full object-cover object-center absolute top-0 left-0' alt="about" />
      <div className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 flex items-center justify-center"><img src="/images/lines.svg" alt="lines" /></div>
      <div className="gradient-bg2 absolute top-0 left-0 w-full h-full"></div>
      <div className="mainCont relative z-10 flex items-center justify-center flex-col text-center h-auto py-[80px]">
          <div className='heading font-[Audiowide] text-[70px] leading-[120%]'>ABOUT US</div>
           <div className='max-w-[900px]'>
           <div className='text-[20px] leading-[36px] lg:mt-5 text-white'>Founded in 1981 by Pierre Lajeunesse, the company was first known under the sole name of "Erivan". At that time, the company was working in civil engineering and construction of large-scale concrete jobs.</div>
           <div className='font-[Audiowide] text-[28px] my-8 leading-[120%] text-white'>Founded in 1981</div>
           <button className='mx-auto flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-6 py-3.5 mt-5'>JOIN THE ADVENTURE <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z" fill="white"/></svg></button>
           </div>
      </div>
      </div>




      <div className="mainCont mt-[140px] flex items-start justify-between gap-6">
        <div className='max-w-[600px]'>
        <div className='heading font-[Audiowide] text-[60px] leading-[120%]'>MORE ON<br/> OUR STORY</div>
         <div className='leading-[30px] text-[17px] mt-10'>The founder's determination to offer Erivan's client an experience that surpasses their own expectations quickly became a trademark of the company. Going above and beyond for each job, Mr. Lajeunesse's values were succesfully transmitted to his successors and became a requirement for his collaborators.<br/><br/>Furthermore, as a visionary leader, Mr. Lajeunsse's forward-thinking allowed him to remain open to learning and exploring new field of operation, thus allowing the company to constantly evolve while preserving an unblemished reputation, without ever compromising its intrinsic values.<br/><br/>In fact, when <span className='font-bold'>Eric Lajeunesse</span>, one of Mr. Lajeunesse's sons, became increasingly involved in Erivan's activities, he lead Erivan in making a judicious shift into the telecommunications field.<br/><br/>Thanks to the increased skills, along with a solid and established experience, Erivan was able to match the high standards required by the industry. </div>
        </div>

        <div className="bg-dark2-main rounded-[24px] p-6 max-w-[600px]">
          <div className="relative w-full h-full flex items-center justify-center">
          <img src="/images/video.png" alt="video" />
          <button className='bg-dark-main rounded-full flex items-center justify-center min-w-[60px] min-h-[60px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10'><svg width="19" height="20" className='translate-x-[2px]' viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 14.4641C21.1667 12.9245 21.1667 9.0755 18.5 7.5359L6.5 0.607693C3.83333 -0.931908 0.5 0.992596 0.5 4.0718V17.9282C0.5 21.0074 3.83333 22.9319 6.5 21.3923L18.5 14.4641Z" fill="white"/></svg></button>
          </div>

          <div className='mt-7'>
            <div className='leading-[30px] text-[16px]'>As the year 2000 was appraoching, the managers of Erivan were aiming to adapt to an extremely competitive and rapidly changing. It was then that they decided to surround themselves with new, high-value partners: <span className='font-bold'>Martin Hince & Michael Aumais.</span><br/><br/>The specific knowledge and innovative perceptions of the latter would enhance the already recognized know-how of the company. Thus, while always staying true to the original philosophy of Erivan, now it was complemented by a stronger team.<br/><br/>Today, the company has now reverted back to its original name, Erivan. For more than 30 years now, it has acquired and maintained a strong reputation in the telecommunications and construction industry.</div>
          </div>
        </div>
      </div>



      <div className="mainCont relative mt-[140px]">
        <WorkSlider/>
      </div>



      <Footer/>

    </div>
    </>
  )
}
