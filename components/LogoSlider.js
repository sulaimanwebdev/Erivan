import React, { useRef } from 'react';
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';

const LogoSlider = () => {

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
        image: "/images/logo1.png",
      },

      {
        id: 2,
        image: "/images/logo2.png",
      },

      {
        id: 3,
        image: "/images/logo3.png",
      },

      {
        id: 4,
        image: "/images/logo4.png",
      },

      {
        id: 5,
        image: "/images/logo5.png",
      },

      {
        id: 6,
        image: "/images/logo6.png",
      },

      {
        id: 7,
        image: "/images/logo7.png",
      },

      {
        id: 8,
        image: "/images/logo8.png",
      },


      {
        id: 9,
        image: "/images/logo9.png",
      },

      {
        id: 10,
        image: "/images/logo10.png",
      },

      {
        id: 11,
        image: "/images/logo11.png",
      },

     
    ];


  return (
    <>
   <div className="flex items-center justify-end gap-6 mt-10 mb-12">
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
            600: {
              slidesPerView: 2,
            },
            689: {
              slidesPerView: 3,
            },
            952: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={4}
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
                <div className='flex items-center justify-center flex-col text-center'>
                  <img src={ele.image} alt="logo" className='select-none' />
                    <div className='text-white font-[600] text-[18px] mt-3 select-none'>{ele.title}</div>
                    <div classNamem='mt-2 select-none'>{ele.date}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
    </>
  )
}

export default LogoSlider