import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkSlider from '../components/WorkSlider';

export default function About() {

  let team = [
    {
      id: 1,
      image: "/images/team1.svg",
      name: "ERIC LAJEUNESSE, ENG.",
      title: "President of Erivan Gecom Group"
    },
    {
      id: 2,
      image: "/images/team2.svg",
      name: "MARTIN HINCE, ENG.",
      title: "VP Operations – Associate"
    },
    {
      id: 3,
      image: "/images/team3.svg",
      name: "FRANÇOIS GAGNÉ, ENG.",
      title: "CEO Ontario & Western branch"
    },
    {
      id: 4,
      image: "/images/team4.svg",
      name: "MICHEL AUMAIS",
      title: "Project Manager - Associate"
    },
    {
      id: 5,
      image: "/images/team5.svg",
      name: "JONATHAN SAUVAGEAU, ENG.",
      title: "Project Manager – Major accounts"
    },
    {
      id: 6,
      image: "/images/team6.svg",
      name: "OLIVIER LAJEUNESSE, ENG.",
      title: "Project Manager – Major accounts"
    },
    {
      id: 7,
      image: "/images/team7.svg",
      name: "JONATHAN BERTHIAUME",
      title: "Project Manager – Major accounts"
    },
    {
      id: 8,
      image: "/images/team8.svg",
      name: "BENJAMIN GRIMES, ENG.",
      title: "Project Manager – Major accounts"
    },
    {
      id: 8,
      image: "/images/team9.svg",
      name: "ANTOINE BRODEUR, CPI",
      title: "Project Manager"
    },
    {
      id: 10,
      image: "/images/team10.svg",
      name: "MATTHEW FALKINER",
      title: "Director of Operations – Ontario"
    },
    {
      id: 11,
      image: "/images/team11.svg",
      name: "SAMUEL PLANTE",
      title: "Project Manager"
    },
    {
      id: 12,
      image: "/images/team12.svg",
      name: "NIKOLA PETROVIC",
      title: "Health and safety coordinator"
    },
    {
      id: 13,
      image: "/images/team13.svg",
      name: "MARIE-ANDRÉE SÉVIGNY",
      title: "Administrative Manager"
    },
    {
      id: 14,
      image: "/images/team12.svg",
      name: "PASCALE CALLENDER",
      title: "HR Manager"
    },
    {
      id: 15,
      image: "/images/team12.svg",
      name: "GERMAN LANDO",
      title: "Director of Operations - Alberta"
    },
   
    
  ]
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
          <div className='heading font-[Audiowide] text-[50px] sm3:text-[60px] sm:text-[70px] leading-[120%]'>ABOUT US</div>
           <div className='max-w-[900px]'>
           <div className='text-[20px] leading-[36px] mt-5 text-white'>Founded in 1981 by Pierre Lajeunesse, the company was first known under the sole name of "Erivan". At that time, the company was working in civil engineering and construction of large-scale concrete jobs.</div>
           <div className='font-[Audiowide] text-[28px] my-8 leading-[120%] text-white'>Founded in 1981</div>
           <button className='mx-auto flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-6 py-3.5 mt-5'>JOIN THE ADVENTURE <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z" fill="white"/></svg></button>
           </div>
      </div>
      </div>




      <div className="mainCont mt-[100px] lg5:mt-[140px] flex items-start flex-col lg5:flex-row justify-between gap-12 lg5:gap-6">
        <div className='lg5:max-w-[600px]'>
        <div className='heading font-[Audiowide] text-[45px] sm3:text-[55px] lg3:text-[60px] leading-[120%]'>MORE ON<br className='hidden sm3:flex'/> OUR STORY</div>
         <div className='leading-[30px] text-[17px] mt-10'>The founder's determination to offer Erivan's client an experience that surpasses their own expectations quickly became a trademark of the company. Going above and beyond for each job, Mr. Lajeunesse's values were succesfully transmitted to his successors and became a requirement for his collaborators.<br/><br/>Furthermore, as a visionary leader, Mr. Lajeunsse's forward-thinking allowed him to remain open to learning and exploring new field of operation, thus allowing the company to constantly evolve while preserving an unblemished reputation, without ever compromising its intrinsic values.<br/><br/>In fact, when <span className='font-bold'>Eric Lajeunesse</span>, one of Mr. Lajeunesse's sons, became increasingly involved in Erivan's activities, he lead Erivan in making a judicious shift into the telecommunications field.<br/><br/>Thanks to the increased skills, along with a solid and established experience, Erivan was able to match the high standards required by the industry. </div>
        </div>

        <div className="bg-dark2-main rounded-[24px] p-6 lg5:max-w-[550px] lg5:min-w-[550px]">
          <div className="relative w-full h-full flex items-center justify-center">
          <img src="/images/video.svg" alt="video" />
          <button className='bg-dark-main rounded-full flex items-center justify-center min-w-[60px] min-h-[60px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10'><svg width="19" height="20" className='translate-x-[2px]' viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 14.4641C21.1667 12.9245 21.1667 9.0755 18.5 7.5359L6.5 0.607693C3.83333 -0.931908 0.5 0.992596 0.5 4.0718V17.9282C0.5 21.0074 3.83333 22.9319 6.5 21.3923L18.5 14.4641Z" fill="white"/></svg></button>
          </div>

          <div className='mt-7'>
            <div className='leading-[30px] text-[16px]'>As the year 2000 was appraoching, the managers of Erivan were aiming to adapt to an extremely competitive and rapidly changing. It was then that they decided to surround themselves with new, high-value partners: <span className='font-bold'>Martin Hince & Michael Aumais.</span><br/><br/>The specific knowledge and innovative perceptions of the latter would enhance the already recognized know-how of the company. Thus, while always staying true to the original philosophy of Erivan, now it was complemented by a stronger team.<br/><br/>Today, the company has now reverted back to its original name, Erivan. For more than 30 years now, it has acquired and maintained a strong reputation in the telecommunications and construction industry.</div>
          </div>
        </div>
      </div>



      <div className="mainCont mt-[120px] lg5:mt-[140px]">
        <WorkSlider/>
      </div>


      <div className="bg-dark2-main pb-12 sm3:pb-0 w-full mt-[140px] sm3:h-[850px] sm5:h-[800px]">
      <div className="mainCont relative pt-16">
        <img src="/images/logo12.svg" className='mx-auto w-[60px] mb-6' alt="logo" />
       <div className='heading font-[Audiowide] text-[40px] sm:text-[60px] text-center'>OUR VALUES</div>

         <div className="text-[17px] mx-auto max-w-[1100px] mt-8 sm:mt-12">Our great work ethic and irreproachable integrity are foundational to our success and for over 30 years, they have stood the test of time. Erivan sees these values as top priority.<br/><br/>In addition to that, it is primordial for Erivan to maintain a great versatility, through its multidisciplinary skills. With the aim to maintain strong, fruitful and long-lasting relationship, Erivan gives the utmost care to all clients and partners by treating each task with equal attention, regardless of the size or complexity of the project.<br/><br/><span className='text-white font-[900]'>Finally,</span> in order to always  offer its customers smart solutions and better alternatives, Erivan constantly strives to demonstrate an innovative appraoch to all of its challenges.</div>

      </div>

         <div className="mainCont w-full mx-auto mt-[40px] sm3:mt-[100px]">
          <img src="/images/our-values.svg" className='grayscale w-full' alt="our-values" />
        </div>
      </div>




      <div className="mainCont flex md:items-center md:justify-between flex-col md:flex-row gap-6 md:gap-12 mt-[100px] sm3:mt-[31%] sm:mt-[36%] md3:mt-[30%] lg3:mt-[433px]">
        <div className='heading font-[Audiowide] text-[40px] sm3:text-[50px] leading-[120%]'>OUR<br className='hidden md:flex'/> MISSION</div>
        <div className='text-[19px] leading-[38px] max-w-[890px]'><span className='font-[900]'>Erivan</span> wants to distinguish itself in all its fields of operations, through an irreproachable work ethic and integrity. Thus acquiring the recognition of the industry, as a loyal and trustworthy business partner.</div>
      </div>



      <div className="mainCont mt-[130px] md:mt-[180px]">
       <div className='heading font-[Audiowide] text-[40px] sm3:text-[60px] text-center'>OUR TEAM</div>
        <div className="grid grid-cols-1 sm2:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10">
           {
            team.map((ele) =>{
              return(
                <div key={ele.id} className='bg-form-main'>
                <img src={ele.image} className='w-full h-[250px] object-cover object-top sm2:h-auto grayscale' alt="team" />
                <div className="text-center py-5 px-3">
                   <div className='text-white font-bold text-[17px]'>{ele.name}</div>
                   <div className='mt-2'>{ele.title}</div>
                </div>
              </div>
              )
            })
           }
        </div>
       </div>


      <Footer/>

    </div>
    </>
  )
}
