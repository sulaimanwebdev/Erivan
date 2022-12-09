import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className="bg-black w-full mt-[100px]">
      <div className="mainCont py-16 flex items-start justify-between">
            <div>
               <Link href="/"><img src="/images/logo-small.svg" alt="logo" /></Link>
                <div className="flex items-center gap-5 mt-6 mb-7">
                  <a href="#"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3332 24.5841C18.0229 24.2418 20.4814 22.8883 22.2089 20.7985C23.9365 18.7087 24.8035 16.0395 24.6337 13.3334C24.4639 10.6273 23.2701 8.0874 21.2948 6.22992C19.3196 4.37244 16.7112 3.33678 13.9998 3.33341C11.2851 3.33139 8.67177 4.36453 6.69229 6.22232C4.71281 8.0801 3.51616 10.6227 3.34616 13.3321C3.17617 16.0415 4.04562 18.7138 5.77736 20.8044C7.5091 22.8951 9.97282 24.2468 12.6665 24.5841V16.6667H9.99984V14.0001H12.6665V11.7947C12.6665 10.0121 12.8532 9.36541 13.1998 8.71341C13.5413 8.06833 14.0691 7.541 14.7145 7.20008C15.2238 6.92675 15.8572 6.76275 16.9638 6.69208C17.4025 6.66408 17.9705 6.69875 18.6678 6.79875V9.33208H17.9998C16.7772 9.33208 16.2718 9.38941 15.9705 9.55075C15.7907 9.64322 15.6443 9.78961 15.5518 9.96941C15.3918 10.2707 15.3332 10.5694 15.3332 11.7934V14.0001H18.6665L17.9998 16.6667H15.3332V24.5841ZM13.9998 27.3334C6.63584 27.3334 0.666504 21.3641 0.666504 14.0001C0.666504 6.63608 6.63584 0.666748 13.9998 0.666748C21.3638 0.666748 27.3332 6.63608 27.3332 14.0001C27.3332 21.3641 21.3638 27.3334 13.9998 27.3334Z" fill="white"/></svg></a>
                  <a href="#"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9998 10.0001C12.939 10.0001 11.9216 10.4215 11.1714 11.1717C10.4213 11.9218 9.99984 12.9392 9.99984 14.0001C9.99984 15.0609 10.4213 16.0784 11.1714 16.8285C11.9216 17.5787 12.939 18.0001 13.9998 18.0001C15.0607 18.0001 16.0781 17.5787 16.8283 16.8285C17.5784 16.0784 17.9998 15.0609 17.9998 14.0001C17.9998 12.9392 17.5784 11.9218 16.8283 11.1717C16.0781 10.4215 15.0607 10.0001 13.9998 10.0001ZM13.9998 7.33341C15.7679 7.33341 17.4636 8.03579 18.7139 9.28604C19.9641 10.5363 20.6665 12.232 20.6665 14.0001C20.6665 15.7682 19.9641 17.4639 18.7139 18.7141C17.4636 19.9644 15.7679 20.6667 13.9998 20.6667C12.2317 20.6667 10.536 19.9644 9.28579 18.7141C8.03555 17.4639 7.33317 15.7682 7.33317 14.0001C7.33317 12.232 8.03555 10.5363 9.28579 9.28604C10.536 8.03579 12.2317 7.33341 13.9998 7.33341V7.33341ZM22.6665 7.00008C22.6665 7.44211 22.4909 7.86603 22.1784 8.17859C21.8658 8.49115 21.4419 8.66675 20.9998 8.66675C20.5578 8.66675 20.1339 8.49115 19.8213 8.17859C19.5088 7.86603 19.3332 7.44211 19.3332 7.00008C19.3332 6.55805 19.5088 6.13413 19.8213 5.82157C20.1339 5.50901 20.5578 5.33342 20.9998 5.33342C21.4419 5.33342 21.8658 5.50901 22.1784 5.82157C22.4909 6.13413 22.6665 6.55805 22.6665 7.00008V7.00008ZM13.9998 3.33341C10.7012 3.33341 10.1625 3.34275 8.62784 3.41075C7.5825 3.46008 6.88117 3.60008 6.2305 3.85341C5.65184 4.07741 5.2345 4.34541 4.7905 4.79075C4.37318 5.19395 4.05231 5.68619 3.85184 6.23075C3.5985 6.88408 3.4585 7.58408 3.4105 8.62808C3.34117 10.1001 3.33317 10.6147 3.33317 14.0001C3.33317 17.2987 3.3425 17.8374 3.4105 19.3721C3.45984 20.4161 3.59984 21.1187 3.85184 21.7681C4.0785 22.3481 4.34517 22.7654 4.78784 23.2081C5.23717 23.6561 5.6545 23.9241 6.22784 24.1454C6.8865 24.4001 7.58784 24.5414 8.62784 24.5894C10.0998 24.6587 10.6145 24.6667 13.9998 24.6667C17.2985 24.6667 17.8372 24.6574 19.3718 24.5894C20.4145 24.5401 21.1172 24.4001 21.7678 24.1481C22.3452 23.9228 22.7652 23.6547 23.2078 23.2121C23.6572 22.7627 23.9252 22.3454 24.1465 21.7721C24.3998 21.1148 24.5412 20.4121 24.5892 19.3721C24.6585 17.9001 24.6665 17.3854 24.6665 14.0001C24.6665 10.7014 24.6572 10.1627 24.5892 8.62808C24.5398 7.58542 24.3998 6.88142 24.1465 6.23075C23.9456 5.68675 23.6253 5.1947 23.2092 4.79075C22.8062 4.37321 22.3139 4.0523 21.7692 3.85208C21.1158 3.59875 20.4145 3.45875 19.3718 3.41075C17.8998 3.34141 17.3852 3.33341 13.9998 3.33341ZM13.9998 0.666748C17.6225 0.666748 18.0745 0.680081 19.4958 0.746748C20.9158 0.813415 21.8825 1.03608 22.7332 1.36675C23.6132 1.70541 24.3545 2.16408 25.0958 2.90408C25.7738 3.57061 26.2984 4.37687 26.6332 5.26675C26.9625 6.11608 27.1865 7.08408 27.2532 8.50408C27.3158 9.92542 27.3332 10.3774 27.3332 14.0001C27.3332 17.6227 27.3198 18.0747 27.2532 19.4961C27.1865 20.9161 26.9625 21.8827 26.6332 22.7334C26.2994 23.6238 25.7747 24.4302 25.0958 25.0961C24.4291 25.7738 23.6229 26.2984 22.7332 26.6334C21.8838 26.9627 20.9158 27.1868 19.4958 27.2534C18.0745 27.3161 17.6225 27.3334 13.9998 27.3334C10.3772 27.3334 9.92517 27.3201 8.50384 27.2534C7.08384 27.1868 6.11717 26.9627 5.2665 26.6334C4.37627 26.2994 3.56987 25.7747 2.90384 25.0961C2.22571 24.4297 1.70108 23.6234 1.3665 22.7334C1.03584 21.8841 0.813171 20.9161 0.746504 19.4961C0.683837 18.0747 0.666504 17.6227 0.666504 14.0001C0.666504 10.3774 0.679837 9.92542 0.746504 8.50408C0.813171 7.08275 1.03584 6.11741 1.3665 5.26675C1.70015 4.37632 2.22491 3.56984 2.90384 2.90408C3.57007 2.22572 4.37641 1.70105 5.2665 1.36675C6.11717 1.03608 7.0825 0.813415 8.50384 0.746748C9.92517 0.684081 10.3772 0.666748 13.9998 0.666748Z" fill="white"/></svg></a>
                  <a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33333 0H22.6667C23.0203 0 23.3594 0.140476 23.6095 0.390524C23.8595 0.640573 24 0.979711 24 1.33333V22.6667C24 23.0203 23.8595 23.3594 23.6095 23.6095C23.3594 23.8595 23.0203 24 22.6667 24H1.33333C0.979711 24 0.640573 23.8595 0.390524 23.6095C0.140476 23.3594 0 23.0203 0 22.6667V1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0V0ZM2.66667 2.66667V21.3333H21.3333V2.66667H2.66667ZM6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8V8ZM4.66667 9.33333H7.33333V19.3333H4.66667V9.33333ZM12 9.90667C12.7787 9.15333 13.688 8.66667 14.6667 8.66667C17.428 8.66667 19.3333 10.9053 19.3333 13.6667V19.3333H16.6667V13.6667C16.6667 13.0478 16.4208 12.4543 15.9832 12.0168C15.5457 11.5792 14.9522 11.3333 14.3333 11.3333C13.7145 11.3333 13.121 11.5792 12.6834 12.0168C12.2458 12.4543 12 13.0478 12 13.6667V19.3333H9.33333V9.33333H12V9.90667Z" fill="white"/></svg></a>
                </div>
                <div className='text-[15px]'>© 2022 Erivan-Gecom Inc.</div>
            </div>


            <div className="flex items-start gap-[150px]">
                <div>
                    <div className='text-white font-[700] text-[20px] mb-5'>Pages</div>
                    <div className='flex flex-col gap-2.5'>
                      <Link href="/" className='text-[15px]'>About Us</Link>
                      <Link href="/" className='text-[15px]'>Experiences & Services</Link>
                      <Link href="/" className='text-[15px]'>Careers</Link>
                      <Link href="/" className='text-[15px]'>Our Involvement</Link>
                      <Link href="/" className='text-[15px]'>Contact</Link>
                    </div>
                </div>

                <div>
                    <div className='text-white font-[700] text-[20px] mb-5'>Contact</div>
                    <div className='flex flex-col gap-5'>
                       <div className='flex items-start gap-4'>
                         <div className='translate-y-1.5'><svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18.8999L13.95 13.9499C14.9289 12.9709 15.5955 11.7236 15.8656 10.3658C16.1356 9.00795 15.9969 7.60052 15.4671 6.32148C14.9373 5.04244 14.04 3.94923 12.8889 3.18009C11.7378 2.41095 10.3844 2.00043 9 2.00043C7.61557 2.00043 6.26222 2.41095 5.11109 3.18009C3.95996 3.94923 3.06275 5.04244 2.53292 6.32148C2.00308 7.60052 1.86442 9.00795 2.13445 10.3658C2.40449 11.7236 3.07111 12.9709 4.05 13.9499L9 18.8999ZM9 21.7279L2.636 15.3639C1.37734 14.1052 0.520187 12.5016 0.172928 10.7558C-0.17433 9.00995 0.00390685 7.20035 0.685099 5.55582C1.36629 3.91129 2.51984 2.50569 3.99988 1.51677C5.47992 0.527838 7.21998 0 9 0C10.78 0 12.5201 0.527838 14.0001 1.51677C15.4802 2.50569 16.6337 3.91129 17.3149 5.55582C17.9961 7.20035 18.1743 9.00995 17.8271 10.7558C17.4798 12.5016 16.6227 14.1052 15.364 15.3639L9 21.7279ZM9 10.9999C9.53044 10.9999 10.0391 10.7892 10.4142 10.4141C10.7893 10.0391 11 9.53035 11 8.99992C11 8.46949 10.7893 7.96078 10.4142 7.58571C10.0391 7.21064 9.53044 6.99992 9 6.99992C8.46957 6.99992 7.96086 7.21064 7.58579 7.58571C7.21072 7.96078 7 8.46949 7 8.99992C7 9.53035 7.21072 10.0391 7.58579 10.4141C7.96086 10.7892 8.46957 10.9999 9 10.9999ZM9 12.9999C7.93914 12.9999 6.92172 12.5785 6.17158 11.8283C5.42143 11.0782 5 10.0608 5 8.99992C5 7.93906 5.42143 6.92164 6.17158 6.17149C6.92172 5.42135 7.93914 4.99992 9 4.99992C10.0609 4.99992 11.0783 5.42135 11.8284 6.17149C12.5786 6.92164 13 7.93906 13 8.99992C13 10.0608 12.5786 11.0782 11.8284 11.8283C11.0783 12.5785 10.0609 12.9999 9 12.9999Z" fill="white"/></svg></div>
                         <div className='text-[15px] leading-[24px]'>Sainte-Julie, QC <br/> Mississauga, ON <br/> Calgary, AB</div>
                       </div>

                       <div className='flex items-start gap-4'>
                         <div className='translate-y-1.5'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.366 7.682C7.30434 9.33048 8.66952 10.6957 10.318 11.634L11.202 10.396C11.3442 10.1969 11.5543 10.0569 11.7928 10.0023C12.0313 9.94779 12.2814 9.98254 12.496 10.1C13.9103 10.8729 15.4722 11.3378 17.079 11.464C17.3298 11.4839 17.5638 11.5975 17.7345 11.7823C17.9052 11.9671 18 12.2094 18 12.461V16.923C18.0001 17.1706 17.9083 17.4094 17.7424 17.5932C17.5765 17.777 17.3483 17.8927 17.102 17.918C16.572 17.973 16.038 18 15.5 18C6.94 18 0 11.06 0 2.5C0 1.962 0.027 1.428 0.082 0.898C0.107255 0.651697 0.222984 0.423521 0.40679 0.257634C0.590595 0.0917472 0.829406 -5.33578e-05 1.077 2.32673e-08H5.539C5.79056 -3.15185e-05 6.0329 0.0947515 6.21768 0.265451C6.40247 0.43615 6.51613 0.670224 6.536 0.921C6.66222 2.52779 7.12708 4.08968 7.9 5.504C8.01746 5.71856 8.05221 5.96874 7.99767 6.2072C7.94312 6.44565 7.80306 6.65584 7.604 6.798L6.366 7.682ZM3.844 7.025L5.744 5.668C5.20478 4.50409 4.83535 3.26884 4.647 2H2.01C2.004 2.166 2.001 2.333 2.001 2.5C2 9.956 8.044 16 15.5 16C15.667 16 15.834 15.997 16 15.99V13.353C14.7312 13.1646 13.4959 12.7952 12.332 12.256L10.975 14.156C10.4287 13.9437 9.89801 13.6931 9.387 13.406L9.329 13.373C7.36758 12.2567 5.74328 10.6324 4.627 8.671L4.594 8.613C4.30691 8.10199 4.05628 7.57134 3.844 7.025Z" fill="white"/></svg></div>
                         <div className='text-[15px] leading-[24px]'>450-922-3000 <br/>647-616-8494 <br/> 403-475-5888</div>
                       </div>


                       <a href='mailto:admin@erivan-gecom.com' className='flex items-start gap-4'>
                         <div className='translate-y-1'><svg width="18" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM18 4.238L10.072 11.338L2 4.216V16H18V4.238ZM2.511 2L10.061 8.662L17.502 2H2.511Z" fill="white"/></svg></div>
                         <div className='text-[15px] leading-[24px]'>admin@erivan-gecom.com</div>
                       </a>
                       
                    </div>
                </div>
            </div>
      </div>
      </div>
    </>
  )
}

export default Footer