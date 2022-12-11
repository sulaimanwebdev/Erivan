import React, { useRef } from 'react';
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';

const WorkSlider = () => {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
  
  
    const [addClass, setaddClass] = React.useState('');
  
    React.useEffect(() => {
      setTimeout(() => {
        setaddClass('z-[99]');
      }, 1000);
    }, []);
  
    let data = [
      {
        id: 1,
        category: 'GOOGLE ANALYTICS',
        name: '5 Startup Analytics',
        avatar: '/images/avatar3.png',
        image: '/images/sliderImage4.png',
        authorName: 'Susan Luo',
        comments: 2,
      },
  
      {
        id: 2,
        category: 'FIGMA',
        name: 'UI design collaboration templates',
        avatar: '/images/avatar2.png',
        image: '/images/sliderImage5.png',
        authorName: 'Jhon Wick',
        comments: 12,
      },
  
      {
        id: 3,
        category: 'AMPLITUDE',
        name: 'How to Setup Amplitude',
        avatar: '/images/avatar1.png',
        image: '/images/sliderImage6.png',
        authorName: 'Christian Buehner',
        comments: 8,
      },
  
      {
        id: 4,
        category: 'GOOGLE ANALYTICS',
        name: '5 Startup Analytics',
        avatar: '/images/avatar3.png',
        image: '/images/sliderImage4.png',
        authorName: 'Susan Luo',
        comments: 2,
      },
  
      {
        id: 5,
        category: 'FIGMA',
        name: 'UI design collaboration templates',
        avatar: '/images/avatar2.png',
        image: '/images/sliderImage5.png',
        authorName: 'Jhon Wick',
        comments: 12,
      },
  
      {
        id: 6,
        category: 'AMPLITUDE',
        name: 'How to Setup Amplitude',
        avatar: '/images/avatar1.png',
        image: '/images/sliderImage6.png',
        authorName: 'Christian Buehner',
        comments: 8,
      },
    ];


  return (
    <>
        
   <div className="flex items-center justify-between gap-6">
   <div className='heading font-[Audiowide] text-[45px] leading-[120%]'>SEE OUR WORK</div>
    <div className="flex items-center gap-3">
    <div ref={navigationPrevRef} className='flex items-center justify-center w-[45px] h-[45px] border-2 border-white rounded-full z-[9999]  cursor-pointer'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.828 7.50005H16V9.50005H3.828L9.192 14.864L7.778 16.278L0 8.50005L7.778 0.722046L9.192 2.13605L3.828 7.50005Z" fill="white"/></svg></div>
        <div ref={navigationNextRef} className='flex items-center justify-center w-[45px] h-[45px] border-2 border-white rounded-full z-[9999]  cursor-pointer'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 7.50005L6.808 2.13605L8.222 0.722046L16 8.50005L8.222 16.278L6.808 14.864L12.172 9.50005H0V7.50005H12.172Z" fill="white"/></svg></div>
    </div>
   </div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            635: {
              slidesPerView: 2.2,
            },
            952: {
              slidesPerView: 3.2,
            },
          }}
          slidesPerView={3.2}
          spaceBetween={20}
          rewind={true}
          pagination={{
            clickable: true,
            // el: 'swiper-pagination',
            type: 'bullets',
            bulletElement: 'span',
            bulletClass: 'timeline-icon',
            bulletActiveClass: 'timeline-icon-active',
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          // onSwiper={(swiper) => {
          //   // Delay execution for the refs to be defined
          //   setTimeout(() => {
          //     // Override prevEl & nextEl now that refs are defined
          //     swiper.params.navigation.prevEl = navigationPrevRef.current
          //     swiper.params.navigation.nextEl = navigationNextRef.current

          //     // Re-init navigation
          //     swiper.navigation.destroy()
          //     swiper.navigation.init()
          //     swiper.navigation.update()
          //   })
          // }}
          modules={[Navigation, Pagination]}
          className='w-full'
        >
          {data.map((ele) => {
            return (
              <SwiperSlide
                key={ele.id}
                className='transition rounded-lg block overflow-hidden relative'
              >
                <div>
                  <Link href='/'>
                      <div className='block relative min-h-[250px]'>
                        <div
                          className={`blackOverlay bg-black bg-opacity-20 transition w-full h-full absolute top-0 left-0 z-10 invisible opacity-0`}
                        ></div>
                        <img
                          src={ele.image}
                          className='w-full absolute h-full top-0 left-0 object-cover'
                          alt='slider'
                        />
                        <div className='absolute top-0 left-0 w-full p-3 h-full z-10 flex justify-between flex-col'>
                          <div>
                            <div className='px-4 py-1.5 bg-human-pink text-human-pink-dark w-fit rounded-lg text-sm font-[sofia-pro-semi-bold]'>
                              {ele.category}
                            </div>
                            <div className='mt-2 text-white text-xl font-[sofia-pro-semi-bold]'>
                              {ele.name}
                            </div>
                          </div>

                          <div className='flex items-center justify-between gap-5'>
                            <div
                             
                              className='cursor-pointer relative flex items-center gap-3'
                            >
                              <img
                                src={ele.avatar}
                                alt='avatar'
                                className='w-[50px] h-[50px] object-cover rounded-full'
                              />
                              <div>
                                <div className='text-white text-lg font-[sofia-pro-semi-bold]'>
                                  {ele.authorName}
                                </div>
                              </div>
                            </div>

                            <div
                              
                              className='text-white flex items-center gap-2 text-lg font-[sofia-pro-normal]'
                            >
                              <img
                                src='/images/commentWhite.svg'
                                className='w-[20px]'
                                alt='comment icon'
                              />
                              {ele.comments}
                            </div>
                          </div>
                        </div>
                      </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        

    </>
  )
}

export default WorkSlider