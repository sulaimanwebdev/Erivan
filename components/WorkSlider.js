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
        image: "/images/slider1.png",
        text: "CENTRE BELL",
        link: "/",
      },

      {
        id: 2,
        image: "/images/slider2.png",
        text: "MONTREAL CASINO",
        link: "/",
      },

      {
        id: 3,
        image: "/images/slider3.png",
        text: "BTS VERDUN",
        link: "/",
      },

      {
        id: 4,
        image: "/images/slider1.png",
        text: "CENTRE BELL",
        link: "/",
      },

      {
        id: 5,
        image: "/images/slider2.png",
        text: "MONTREAL CASINO",
        link: "/",
      },

      {
        id: 6,
        image: "/images/slider3.png",
        text: "BTS VERDUN",
        link: "/",
      },

     
    ];


  return (
    <>
   <div className="flex items-center justify-between gap-6 mb-8">
   <div className='heading font-[Audiowide] text-[30px] sm3:text-[35px] sm:text-[45px] leading-[120%]'>SEE OUR WORK</div>
    <div className="flex items-center gap-3">
      <div ref={navigationPrevRef} className='flex items-center justify-center w-[45px] h-[45px] border-2 border-white rounded-full cursor-pointer'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.828 7.50005H16V9.50005H3.828L9.192 14.864L7.778 16.278L0 8.50005L7.778 0.722046L9.192 2.13605L3.828 7.50005Z" fill="white"/></svg></div>
      <div ref={navigationNextRef} className='flex items-center justify-center w-[45px] h-[45px] border-2 border-white rounded-full cursor-pointer'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 7.50005L6.808 2.13605L8.222 0.722046L16 8.50005L8.222 16.278L6.808 14.864L12.172 9.50005H0V7.50005H12.172Z" fill="white"/></svg></div>
    </div>
   </div>

        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            450: {
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
          spaceBetween={25}
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
                  <Link href={ele.link} className=''>
                      <img src={ele.image} className='grayscale select-none h-[230px] w-full object-cover object-center rounded-[14px]' alt="cover" />
                      <div className="flex items-center justify-between mt-2 ">
                      <div className='text-white font-[500] text-[19px] leading-[36px] '>{ele.text}</div>
                      <div className=''><svg width="15" height="14" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3389 4.552L2.86287 16.028L0.977539 14.1427L12.4522 2.66667H2.33887V0H17.0055V14.6667H14.3389V4.552Z" fill="white"/></svg></div>
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