import Header from "../components/Header";
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className="bg-dark-main text-content-main">
      <Header/>

      <div className="mainCont relative h-[700px] flex items-center justify-start">
          <div>
          <div className='heading font-[Audiowide] text-[60px] 2xl:text-[70px] leading-[120%]'>FROM DESIGN<br/>TO DELIVERY.</div>
          <div className='text-[19px] leading-[30px] mt-5'>Where connection meets technology.<br/>Join <span className='text-white font-[900]'>Erivan Gecom</span> in its adventure.</div>
          <button className='flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-8 py-3 mt-8'>JOIN THE ADVENTURE <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z" fill="white"/></svg></button>
          </div>
          <img src="/images/tower1.png" className='absolute top-0 right-0 h-[900px]' alt="tower" />
      </div>


      <div className="max-w-[1200px] mx-auto mt-[150px]">
      <div className="mainCont relative flex items-start justify-between gap-5">
           <img src="/images/tower2.png" className='h-[700px]' alt="tower" />
           <div className='max-w-[600px] leading-[36px] translate-y-[150px]'>
            <div className='text-[18px]'>Where solutions don't exist, we make them accessible and realize them. With all the new innovations, Erivan is staying ahead to serve its customers with the best experience. Erivan specializes in:</div>
           <div className="mt-10 max-w-[400px]">
            <Link href="/" className='flex items-center justify-between group'>
              <div className="flex items-center gap-5">
                  <div className="rounded-full w-[55px] h-[55px] flex items-center justify-center bg-white"><svg width="23" height="23" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 11L16 20H4.00002L10 11ZM10 14.6L7.74002 18H12.26L10 14.6ZM8.94002 8.55996C8.79264 8.42264 8.67444 8.25703 8.59246 8.07304C8.51047 7.88904 8.46639 7.69041 8.46284 7.489C8.45928 7.2876 8.49633 7.08754 8.57177 6.90076C8.64721 6.71399 8.7595 6.54432 8.90194 6.40188C9.04438 6.25944 9.21405 6.14716 9.40082 6.07171C9.5876 5.99627 9.78766 5.95922 9.98906 5.96278C10.1905 5.96633 10.3891 6.01041 10.5731 6.0924C10.7571 6.17438 10.9227 6.29258 11.06 6.43996C11.325 6.72431 11.4692 7.1004 11.4624 7.489C11.4555 7.87761 11.2981 8.24838 11.0233 8.5232C10.7484 8.79803 10.3777 8.95545 9.98906 8.96231C9.60046 8.96916 9.22437 8.82492 8.94002 8.55996ZM3.28102 0.782959L4.69602 2.19796C3.28968 3.60446 2.49962 5.51198 2.49962 7.50096C2.49962 9.48994 3.28968 11.3975 4.69602 12.804L3.28102 14.219C2.39872 13.3368 1.69883 12.2895 1.22132 11.1368C0.743817 9.98409 0.498047 8.74863 0.498047 7.50096C0.498047 6.25329 0.743817 5.01783 1.22132 3.86515C1.69883 2.71247 2.39872 1.66513 3.28102 0.782959ZM16.717 0.782959C17.5993 1.66513 18.2992 2.71247 18.7767 3.86515C19.2542 5.01783 19.5 6.25329 19.5 7.50096C19.5 8.74863 19.2542 9.98409 18.7767 11.1368C18.2992 12.2895 17.5993 13.3368 16.717 14.219L15.302 12.804C16.7084 11.3975 17.4984 9.48994 17.4984 7.50096C17.4984 5.51198 16.7084 3.60446 15.302 2.19796L16.717 0.782959ZM6.11002 3.61096L7.52402 5.02496C7.19898 5.34997 6.94114 5.73582 6.76522 6.16048C6.58931 6.58515 6.49877 7.0403 6.49877 7.49996C6.49877 7.95962 6.58931 8.41477 6.76522 8.83943C6.94114 9.2641 7.19898 9.64995 7.52402 9.97496L6.11002 11.389C5.07862 10.3575 4.49919 8.95861 4.49919 7.49996C4.49919 6.04131 5.07862 4.6424 6.11002 3.61096ZM13.888 3.61096C14.9194 4.6424 15.4988 6.04131 15.4988 7.49996C15.4988 8.95861 14.9194 10.3575 13.888 11.389L12.474 9.97496C12.7991 9.64995 13.0569 9.2641 13.2328 8.83943C13.4087 8.41477 13.4993 7.95962 13.4993 7.49996C13.4993 7.0403 13.4087 6.58515 13.2328 6.16048C13.0569 5.73582 12.7991 5.34997 12.474 5.02496L13.888 3.61096Z" fill="#101113"/></svg></div>
                  <div className='text-white font-[600] text-[21px]'>Civil engineering</div>
              </div>
              <div className='transition group-hover:translate-x-1'><svg width="17" height="16" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3389 4.552L2.86287 16.028L0.977539 14.1427L12.4522 2.66667H2.33887V0H17.0055V14.6667H14.3389V4.552Z" fill="white"/></svg></div>
            </Link>
            
            <Link href="/" className='flex items-center justify-between mt-8 group'>
              <div className="flex items-center gap-5">
                  <div className="rounded-full w-[55px] h-[55px] flex items-center justify-center bg-white"><svg width="23" height="23" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.116 18.087C2.84003 17.1599 1.80182 15.9437 1.08639 14.538C0.370965 13.1324 -0.00132749 11.5772 3.55658e-06 10C3.55658e-06 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20.0013 11.5772 19.629 13.1324 18.9136 14.538C18.1982 15.9437 17.16 17.1599 15.884 18.087L14.869 16.348C16.1954 15.3306 17.1698 13.9232 17.6552 12.3236C18.1407 10.724 18.1129 9.01247 17.5757 7.42947C17.0385 5.84648 16.0189 4.47153 14.6601 3.49776C13.3013 2.524 11.6717 2.00034 10 2.00034C8.32834 2.00034 6.69867 2.524 5.3399 3.49776C3.98114 4.47153 2.96154 5.84648 2.42434 7.42947C1.88714 9.01247 1.85932 10.724 2.34478 12.3236C2.83025 13.9232 3.80461 15.3306 5.131 16.348L4.116 18.087V18.087ZM6.15 14.602C5.20503 13.8114 4.52634 12.7491 4.20616 11.5594C3.88597 10.3696 3.9398 9.11017 4.36035 7.9521C4.78089 6.79403 5.54776 5.7935 6.55675 5.08644C7.56574 4.37939 8.76794 4.0001 10 4.0001C11.2321 4.0001 12.4343 4.37939 13.4433 5.08644C14.4523 5.7935 15.2191 6.79403 15.6397 7.9521C16.0602 9.11017 16.114 10.3696 15.7939 11.5594C15.4737 12.7491 14.795 13.8114 13.85 14.602L12.82 12.836C13.3818 12.2775 13.7651 11.5649 13.9214 10.7883C14.0777 10.0117 13.9998 9.20623 13.6978 8.47394C13.3957 7.74165 12.8831 7.11552 12.2248 6.67495C11.5664 6.23437 10.7921 5.99917 10 5.99917C9.20786 5.99917 8.43356 6.23437 7.77525 6.67495C7.11694 7.11552 6.60426 7.74165 6.30221 8.47394C6.00016 9.20623 5.92234 10.0117 6.07861 10.7883C6.23488 11.5649 6.61821 12.2775 7.18 12.836L6.15 14.602V14.602ZM9 11H11V20H9V11Z" fill="#101113"/></svg></div>
                  <div className='text-white font-[600] text-[21px]'>Telecommunications</div>
              </div>
              <div className='transition group-hover:translate-x-1'><svg width="17" height="16" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3389 4.552L2.86287 16.028L0.977539 14.1427L12.4522 2.66667H2.33887V0H17.0055V14.6667H14.3389V4.552Z" fill="white"/></svg></div>
            </Link>


            <Link href="/" className='flex items-center justify-between mt-8 group'>
              <div className="flex items-center gap-5">
                  <div className="rounded-full w-[55px] h-[55px] flex items-center justify-center bg-white"><svg width="23" height="26" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33982 15.9999C0.917087 15.2689 0.588481 14.4874 0.361816 13.6739C0.855124 13.423 1.26941 13.0406 1.55885 12.5688C1.84828 12.0971 2.00158 11.5545 2.00179 11.0011C2.002 10.4476 1.8491 9.90489 1.56002 9.43295C1.27094 8.961 0.856936 8.57821 0.363816 8.32694C0.815852 6.69243 1.67655 5.1999 2.86482 3.98994C3.32891 4.29167 3.86744 4.45911 4.42079 4.47373C4.97415 4.48834 5.52077 4.34958 6.00015 4.07278C6.47952 3.79598 6.87297 3.39194 7.13694 2.90539C7.40092 2.41883 7.52512 1.86872 7.49582 1.31594C9.13793 0.891567 10.861 0.892255 12.5028 1.31795C12.4738 1.87071 12.5982 2.42073 12.8624 2.90715C13.1266 3.39357 13.5202 3.79742 13.9996 4.07401C14.4791 4.35059 15.0258 4.48913 15.5791 4.4743C16.1324 4.45946 16.6709 4.29183 17.1348 3.98994C17.7138 4.57994 18.2278 5.25095 18.6598 5.99995C19.0928 6.74895 19.4168 7.52995 19.6378 8.32595C19.1445 8.57685 18.7302 8.95932 18.4408 9.43105C18.1514 9.90278 17.9981 10.4454 17.9978 10.9988C17.9976 11.5523 18.1505 12.095 18.4396 12.5669C18.7287 13.0389 19.1427 13.4217 19.6358 13.6729C19.1838 15.3075 18.3231 16.8 17.1348 18.0099C16.6707 17.7082 16.1322 17.5408 15.5788 17.5262C15.0255 17.5115 14.4789 17.6503 13.9995 17.9271C13.5201 18.2039 13.1267 18.6079 12.8627 19.0945C12.5987 19.5811 12.4745 20.1312 12.5038 20.6839C10.8617 21.1083 9.13859 21.1076 7.49682 20.6819C7.52586 20.1292 7.40141 19.5792 7.13724 19.0927C6.87306 18.6063 6.47946 18.2025 5.99999 17.9259C5.52052 17.6493 4.97387 17.5108 4.42054 17.5256C3.86721 17.5404 3.32878 17.7081 2.86482 18.0099C2.27381 17.4069 1.76141 16.7315 1.33982 15.9999ZM6.99982 16.1959C8.06544 16.8106 8.86666 17.797 9.24982 18.9659C9.74882 19.0129 10.2498 19.0139 10.7488 18.9669C11.1322 17.7978 11.9338 16.8114 12.9998 16.1969C14.065 15.5806 15.3203 15.3794 16.5248 15.6319C16.8148 15.2239 17.0648 14.7889 17.2728 14.3339C16.4522 13.4174 15.9989 12.2302 15.9998 10.9999C15.9998 9.73994 16.4698 8.56295 17.2728 7.66595C17.0633 7.21109 16.8123 6.77658 16.5228 6.36795C15.3191 6.62025 14.0646 6.41942 12.9998 5.80395C11.9342 5.18932 11.133 4.20293 10.7498 3.03394C10.2508 2.98694 9.74982 2.98594 9.25082 3.03294C8.86741 4.20209 8.06582 5.1885 6.99982 5.80295C5.9346 6.41926 4.67929 6.62046 3.47482 6.36795C3.18538 6.77623 2.93495 7.21081 2.72682 7.66595C3.54739 8.5825 4.0007 9.76974 3.99982 10.9999C3.99982 12.2599 3.52982 13.4369 2.72682 14.3339C2.93629 14.7888 3.18736 15.2233 3.47682 15.6319C4.68053 15.3796 5.93502 15.5805 6.99982 16.1959ZM9.99982 13.9999C9.20417 13.9999 8.4411 13.6839 7.8785 13.1213C7.31589 12.5587 6.99982 11.7956 6.99982 10.9999C6.99982 10.2043 7.31589 9.44123 7.8785 8.87862C8.4411 8.31602 9.20417 7.99995 9.99982 7.99995C10.7955 7.99995 11.5585 8.31602 12.1211 8.87862C12.6837 9.44123 12.9998 10.2043 12.9998 10.9999C12.9998 11.7956 12.6837 12.5587 12.1211 13.1213C11.5585 13.6839 10.7955 13.9999 9.99982 13.9999ZM9.99982 11.9999C10.265 11.9999 10.5194 11.8946 10.7069 11.7071C10.8945 11.5195 10.9998 11.2652 10.9998 10.9999C10.9998 10.7347 10.8945 10.4804 10.7069 10.2928C10.5194 10.1053 10.265 9.99994 9.99982 9.99994C9.7346 9.99994 9.48025 10.1053 9.29271 10.2928C9.10517 10.4804 8.99982 10.7347 8.99982 10.9999C8.99982 11.2652 9.10517 11.5195 9.29271 11.7071C9.48025 11.8946 9.7346 11.9999 9.99982 11.9999Z" fill="#101113"/></svg></div>
                  <div className='text-white font-[600] text-[21px]'>Engineering and testing</div>
              </div>
              <div className='transition group-hover:translate-x-1'><svg width="17" height="16" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3389 4.552L2.86287 16.028L0.977539 14.1427L12.4522 2.66667H2.33887V0H17.0055V14.6667H14.3389V4.552Z" fill="white"/></svg></div>
            </Link>


            <Link href="/" className='flex items-center justify-between mt-8 group'>
              <div className="flex items-center gap-5">
                  <div className="rounded-full w-[55px] h-[55px] flex items-center justify-center bg-white"><svg width="21" height="21" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.32992 0.270994C2.95397 0.0483674 3.62839 0.00744884 4.27478 0.152995C4.92116 0.298541 5.51296 0.624573 5.98136 1.09319C6.44977 1.5618 6.77553 2.15374 6.92079 2.80019C7.06605 3.44664 7.02483 4.12104 6.80192 4.74499L17.6469 15.59L15.5249 17.711L4.67992 6.86699C4.05587 7.08962 3.38145 7.13054 2.73506 6.98499C2.08868 6.83945 1.49688 6.51341 1.02848 6.0448C0.560077 5.57619 0.23431 4.98425 0.089053 4.3378C-0.0562041 3.69135 -0.0149841 3.01694 0.207921 2.39299L2.44392 4.62999C2.58229 4.77326 2.74781 4.88753 2.93081 4.96615C3.11382 5.04476 3.31065 5.08614 3.50982 5.08787C3.70899 5.0896 3.90651 5.05165 4.09085 4.97623C4.2752 4.90081 4.44267 4.78943 4.58351 4.64859C4.72435 4.50775 4.83573 4.34027 4.91115 4.15592C4.98658 3.97158 5.02453 3.77406 5.0228 3.57489C5.02107 3.37572 4.97969 3.17889 4.90107 2.99589C4.82246 2.81288 4.70819 2.64736 4.56492 2.50899L2.32892 0.269994L2.32992 0.270994ZM12.6969 2.15499L15.8789 0.386994L17.2929 1.80099L15.5249 4.98299L13.7569 5.33699L11.6369 7.45799L10.2219 6.04399L12.3429 3.92299L12.6969 2.15499ZM5.62592 9.93299L7.74692 12.055L2.79692 17.005C2.52396 17.2754 2.15764 17.4308 1.7735 17.439C1.38937 17.4473 1.01671 17.3078 0.732374 17.0494C0.448042 16.791 0.273718 16.4333 0.245352 16.0501C0.216986 15.6669 0.336741 15.2875 0.579921 14.99L0.676921 14.883L5.62592 9.93299Z" fill="black"/></svg></div>
                  <div className='text-white font-[600] text-[21px]'>Project management</div>
              </div>
              <div className='transition group-hover:translate-x-1'><svg width="17" height="16" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3389 4.552L2.86287 16.028L0.977539 14.1427L12.4522 2.66667H2.33887V0H17.0055V14.6667H14.3389V4.552Z" fill="white"/></svg></div>
            </Link>

           </div>
           </div>
      </div>
      </div>





      <div className="relative w-full mt-[140px]">
      <img src="/images/engineers.png" className='w-full h-full object-cover object-center absolute top-0 left-0' alt="engineers" />
      <div className="gradient-bg absolute top-0 left-0 w-full h-full"></div>
      <div className="mainCont relative z-10 flex items-end h-[800px]">
        <div className="flex items-start justify-between gap-5 w-full -translate-y-[100px]">
          <div className='heading font-[Audiowide] text-[60px] 2xl:text-[70px] leading-[120%]'>JOIN THE<br/>ADVENTURE</div>
           <div className='max-w-[500px]'>
           <div className='text-[17px] leading-[24px] mt-5'>Empowering everyone by making a positive difference. We are no ordinary team.<br/><span className='text-white font-[900]'>Are you ready to join the adventure?</span></div>
           <button className='flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-6 py-3.5 mt-5'>APPLY NOW <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z" fill="white"/></svg></button>

           </div>
        </div>
      </div>
      </div>

      <div className="bg-dark2-main w-full mt-[140px]">
      <div className="mainCont py-16">
           <div className='heading font-[Audiowide] text-[60px] text-center'>HISTORY</div>

           <div className="mt-12 max-w-[1100px] mx-auto">
              <div className="flex items-center justify-between gap-16">
                <div className="rounded-full border border-white min-w-[350px] px-12 py-3.5">
                   <div className="font-[Audiowide] text-white flex items-center gap-3 text-[35px] mb-[2px]">1981 <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4534 14.3387L0.976074 2.86266L2.86141 0.977325L14.3374 12.452V2.33866H17.0041V17.0053H2.33741V14.3387H12.4534Z" fill="white"/></svg></div>
                   <div>FOUNDED BY PIERRE LAJEUNESSE</div>
                </div>

                <div className='max-w-[800px] leading-[24px] text-[17px]'>Founded in 1981 by <span className='text-white font-[900]'>Pierre Lajeunesse</span>, the company was first known under the sole name of "Erivan". At that time, the company was working in civil engineering and construction of large-scale concrete jobs.</div>
              </div>


              <div className="mt-12 flex items-center justify-between gap-16">
                <div className="rounded-full border border-white min-w-[350px] px-12 py-3.5">
                   <div className="font-[Audiowide] text-white flex items-center gap-3 text-[35px] mb-[2px]">1995 <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4534 14.3387L0.976074 2.86266L2.86141 0.977325L14.3374 12.452V2.33866H17.0041V17.0053H2.33741V14.3387H12.4534Z" fill="white"/></svg></div>
                   <div>TELECOMMUNICATIONS LAUNCH</div>
                </div>

                <div className='max-w-[800px] leading-[24px] text-[17px]'>In 1995, <span className='text-white font-[900]'>Eric Lajeunesse</span>, one of Lajeunesse's sons, became increasingly involved in Erivan's activities. Having, himself, just gratuated in civil engineering, he helped Erivan make a judicious shift into the telecommunications field.<br/><br/>The increased skills, equiped with a solid and established experience, aligned perfectly with the high standards required by the industry.</div>
              </div>



              <div className="mt-12 flex items-center justify-between gap-16">
                <div className="rounded-full border border-white min-w-[350px] px-12 py-3.5">
                   <div className="font-[Audiowide] text-white flex items-center gap-3 text-[35px] mb-[2px]">1999 <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4534 14.3387L0.976074 2.86266L2.86141 0.977325L14.3374 12.452V2.33866H17.0041V17.0053H2.33741V14.3387H12.4534Z" fill="white"/></svg></div>
                   <div>NEW ASSOCIATES</div>
                </div>

                <div className='max-w-[800px] leading-[24px] text-[17px]'>Aiming to adapt to an extremely competitive and rapidly changing environment, the managers of Erivan decided to surround themselves with new, high-value partners: <span className='text-white font-[900]'>Martin Hince & Michel Aumais.</span><br/><br/>The specific knowledge and innovative perceptions of the latter would enhance the already recognized know-how of the company. Thus, while always staying true to the original philosophy of Erivan, now it was complemented by a stronger team.</div>
              </div>




              <div className="mt-12 flex items-center justify-start gap-16">
                <div className="rounded-full bg-white border border-white min-w-[350px] px-12 py-3.5">
                   <div className="font-[Audiowide] text-black flex items-center gap-3 text-[35px] mb-[2px]">2004 <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4534 14.3387L0.976074 2.86266L2.86141 0.977325L14.3374 12.452V2.33866H17.0041V17.0053H2.33741V14.3387H12.4534Z" fill="black"/></svg></div>
                   <div className='text-gray-main'>ERIVAN GECOM GROUP</div>
                </div>

                <div className='max-w-[800px] leading-[36px] text-[20px]'>Thus, in <span className='text-white font-[900]'>2004</span>, the <span className='text-white font-[900]'>Erivan Gecom Group</span><br/>was officially born.</div>
              </div>




              <div className="mt-12 flex items-center justify-between gap-16">
                <div className="rounded-full border border-white min-w-[350px] px-12 py-3.5">
                   <div className="font-[Audiowide] text-white flex items-center gap-3 text-[35px] mb-[2px]">2017 <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4534 14.3387L0.976074 2.86266L2.86141 0.977325L14.3374 12.452V2.33866H17.0041V17.0053H2.33741V14.3387H12.4534Z" fill="white"/></svg></div>
                   <div>EXPANSION</div>
                </div>

                <div className='max-w-[800px] leading-[24px] text-[17px]'>Adapting to the ever changing industry and to offer a competitive advantage, <span className='font-[900]'>Erivan opened an office in Mississauga, ON</span> to ensure a greater visibility and infiltrating the Ontario market.</div>
              </div>



              <div className="mt-12 flex items-center justify-between gap-16">
                <div className="rounded-full border border-white min-w-[350px] px-12 py-3.5">
                   <div className="font-[Audiowide] text-white flex items-center gap-3 text-[35px] mb-[2px]">2022 <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4534 14.3387L0.976074 2.86266L2.86141 0.977325L14.3374 12.452V2.33866H17.0041V17.0053H2.33741V14.3387H12.4534Z" fill="white"/></svg></div>
                   <div>TODAY</div>
                </div>

                <div className='max-w-[800px] leading-[24px] text-[17px]'>Today, the company has now reverted back to its original name, <span className='text-white font-[900]'>Erivan</span>. For more than 30 years now, it has acquired and maintained a strong reputation in the telecommunications and construction industry.<br/><br/>Furthermore, <span className='font-[900]'>Erivan opened an office in Calgary, AB</span> thus expanding the company nationally and infiltrating the Western market.</div>
              </div>



           </div>
      </div>
      </div>






      <div className="mainCont py-16 mt-[140px]">
          <div className='heading font-[Audiowide] text-[60px] text-center'>OUR CUSTOMERS</div>

        <div className="mt-12 flex items-center justify-evenly lg2:justify-between flex-wrap gap-6">
           <img src="/images/logo1.png" className='w-[180px]' alt="Cogeco" />
           <img src="/images/logo2.png" className='w-[200px]' alt="SpaceX" />
           <img src="/images/logo3.png" className='w-[200px]' alt="Videotron" />
           <img src="/images/logo4.png" className='w-[200px]' alt="Ericsson" />
           <img src="/images/logo5.png" className='w-[70px]' alt="Bell" />
           <img src="/images/logo6.png" className='w-[200px]' alt="Nokia Siemens Networks" />
           <img src="/images/logo7.png" className='w-[200px]' alt="XPolarNet" />
           <img src="/images/logo8.png" className='w-[200px]' alt="Telus" />
           <img src="/images/logo9.png" className='w-[200px]' alt="Samsung" />
           <img src="/images/logo10.png" className='w-[200px]' alt="Rogers" />
           <img src="/images/logo11.png" className='w-[200px]' alt="Freedom Mobile" />
        </div>

      </div>


    </div>
    </>
  )
}
