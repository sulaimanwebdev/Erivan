import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Careers() {
let team = [
    {
      id: 1,
      image: "/images/athena-worker.png",
      title: "Line and Antenna Worker",
      desc: "Linemen install lines and antennas for major carriers’ cellular networks. They inspect security equipment and materials that ensure personal safety. They must be able to work at heights, on cell towers and on roofs of buildings. Linemen do physical, outdoor work."
    },
    {
      id: 2,
      image: "/images/athena-worker.png",
      title: "Project Manager",
      desc: "Project Managers carry out the planning and preparation of timelines (schedules) in collaboration with the worksite coordinator. They manage the entire coordination of projects that have been attributed to them and are their responsibility. They check plans and contracts in order to ensure that they are in good order and conform to norms."
    },
    {
      id: 3,
      image: "/images/athena-worker.png",
      title: "Construction worker",
      desc: "...."
    },
    {
      id: 4,
      image: "/images/athena-worker.png",
      title: "Carpenter",
      desc: "Carpenters build shelters for telecommunications equipment as well as office space. They carry out all general construction tasks, including renovation and carpentry, as well as installation of specialized wall covering."
    },
    {
      id: 5,
      image: "/images/athena-worker.png",
      title: "Warehouse clerk",
      desc: "Warehouse clerks are responsible for all activities and functions related to general warehouse work, contributing to the efficiency of the department by carrying out order preparation, handling, and verification, as well as seeing to the loading and unloading of trucks."
    }

  ]

  return (
    <>
    <Head>
      <title>Erivan</title>
    </Head>

    <div className="bg-dark-main text-content-main">
      <Header/>

      <div className="relative w-full"> 
      <img src="/images/careers.png" className='grayscale w-full h-full object-cover object-center absolute top-0 left-0' alt="about" />
      <div className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 flex items-center justify-center"><img src="/images/lines.svg" alt="lines" /></div>
      <div className="gradient-bg2 absolute top-0 left-0 w-full h-full"></div>
      <div className="mainCont relative z-10 flex items-center justify-center flex-col text-center h-auto py-[80px]">
          <div className='heading font-[Audiowide] text-[50px] sm3:text-[60px] sm:text-[70px] leading-[120%]'>CAREERS</div>
           <div className='max-w-[900px]'>
           <div className='text-[20px] leading-[36px] mt-5 text-white'>Are you passionated by modern solutions and evolution? We are looking for hardworking, motivated individuals driven by a sense of innovation! Are you ready for an adventure?</div>
           <div className='font-[Audiowide] text-[28px] my-8 leading-[120%] text-white'>Founded in 1981</div>
           <button className='mx-auto flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-6 py-3.5 mt-5'>JOIN THE ADVENTURE <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z" fill="white"/></svg></button>
           </div>
      </div>
      </div>

      <div className="mainCont mt-[140px] flex items-center justify-between gap-5">
         <img src="/images/careers2.png" className='grayscale w-[500px]' alt="careers" />
         <div className='max-w-[700px]'>
         <img src="/images/logo12.svg" className='mb-4 w-[45px]' alt="logo" />
         <div className='heading font-[Audiowide] text-[50px] sm3:text-[60px] leading-[120%]'>PAID<br/> TRAINING</div>
         <div className="mt-3 text-[17px] leading-[29px]">Are you looking for good working conditions, job stability and a reputable company to wrok for? Join an ever-growing team and benefit from salary increase. If you're versatile and like manual work, you are in luck. We are starting our recruitment process to scale the team. Come make a difference at Erivan!</div>
          
         </div>
      </div>



      <div className="bg-dark2-main pb-12 sm3:pb-0 w-full mt-[140px] sm3:h-[850px] sm5:h-[800px]">
      <div className="mainCont relative pt-16">
         <div className="flex items-start justify-between gap-5">
          <div className='heading font-[Audiowide] text-[60px] leading-[120%] uppercase'>Starting Off<br/> Your<br/> Professional<br/> Career?</div>
          <img src="/images/careers3.png" className='grayscale w-[600px]' alt="careers" />
         </div>
         <div className="mt-6 text-[18px] max-w-[1200px]">Join a team dedicated to large-scale projects with local and international impact. Discover a culture that values going the extra mile by providing the support and encouragement you need to do meaningful work that has a real significance on your community.</div>
      </div>

         <div className="mainCont w-full mx-auto mt-[40px] sm3:mt-[100px]">
          <img src="/images/people.png" className='grayscale rounded-[16px] w-full max-w-[1200px] mx-auto max-h-[400px] object-cover object-top' alt="people" />
        </div>
      </div>

      <div className="mainCont mt-[100px] sm3:mt-[31%] sm:mt-[36%] md3:mt-[30%] lg3:mt-[200px]">
        <div className="mx-auto max-w-[1200px]">
        <div className='heading font-[Audiowide] text-[40px] sm3:text-[50px] leading-[120%] uppercase'>Inspired by Difference, Motivated by Inclusion</div>
        <div className='text-[19px] mt-6'>Discover a forward-thinking culture that doesn’t shy away from traditional qualities like respect, integrity and trust.</div>
        <div className='text-[19px] mt-5'>Erivan welcomes every perspective, strength, talent, belief or gender with open arms. Because when they come together, they produce extraordinary results.</div>
        </div>
      </div>



      <div className="mainCont mt-[130px] md:mt-[180px]">
       <div className='heading font-[Audiowide] text-[40px] sm3:text-[60px] text-center'>POSITIONS AVAILABLE</div>
        <div className="grid grid-cols-1 sm2:grid-cols-2 md:grid-cols-3 gap-7 mt-10">
           {
            team.map((ele) =>{
              return(
                <div key={ele.id} className='bg-form-main relative'>
                <img src={ele.image} className='w-full h-[250px] object-cover object-top sm2:h-auto grayscale' alt="team" />
                <div className="py-5 pb-[120px] px-3">
                   <div className='text-white font-bold text-[18px]'>{ele.title}</div>
                   <div className='mt-2 text-[15px]'>{ele.desc}</div>
                   <button className='absolute bottom-[22px] left-[12px] flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-6 py-3.5'>SEE MORE <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z" fill="white"/></svg></button>
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
