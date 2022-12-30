import React, { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { useTranslation } from "react-i18next";

const CausesSlider = () => {
  const { t } = useTranslation();

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [addClass, setaddClass] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      setaddClass("z-[99]");
    }, 1000);
  }, []);

  let data = [
    {
      id: 1,
      image: "/images/cause1.png",
      title: "Fondation Jean-Neveu",
      date: "Since 2011",
    },

    {
      id: 2,
      image: "/images/cause2.png",
      title: "Cause pour la Cause",
      date: "Since 2017",
    },

    {
      id: 3,
      image: "/images/cause3.png",
      title: "Fondation St-Paul",
      date: "Since 2010",
    },

    {
      id: 4,
      image: "/images/cause4.png",
      title: "Optimist Club",
      date: "Since 1965",
    },

    {
      id: 5,
      image: "/images/Fondation/Action Sport Physio.png",
      title: "Action Sport Physio",
      date: "Since 1965",
      big_image: true,
    },

    {
      id: 6,
      image: "/images/Fondation/au-second-lieu-logo-220x75-01.svg",
      title: "Au Second Lieu",
      date: "Since 1965",
      big_image: true,
    },

    {
      id: 7,
      image: "/images/Fondation/BCC_LOGO_HZ_FC_POS_CMYK_TM_EN1.png",
      title: "BCC",
      date: "Since 1965",
      big_image: true,
    },

    {
      id: 8,
      image: "/images/Fondation/Centraide_United_Way_Canada_horizontal.png",
      title: "Centraide United",
      date: "Since 1965",
      big_image: true,
    },

    {
      id: 9,
      image: "/images/Fondation/Fondation Eulalie-Durocher.png",
      title: "Fondation Eulalie-Durocher",
      date: "Since 1965",
      big_image: true,
    },

    {
      id: 10,
      image: "/images/Fondation/Fondation Hopital Charles-Lemoyne.png",
      title: "Fondation Hopital",
      date: "Since 1965",
      big_image: true,
    },

    {
      id: 11,
      image: "/images/Fondation/Fondation-Charles-Bruneau_logo_RGB.png",
      title: "Fondation Charles Bruneau",
      date: "Since 1965",
      big_image: true,
    },

    {
      id: 12,
      image: "/images/Fondation/LeGrandDefi.png",
      title: "LeGrand sDefi",
      date: "Since 1965",
      big_image: true,
    },

    {
      id: 13,
      image: "/images/Fondation/logo-35ans-white.png",
      title: "35ans White",
      date: "Since 1965",
      big_image: true,
    },

    {
      id: 14,
      image: "/images/Fondation/Pierre-Boucher.png",
      title: "Pierre Boucher",
      date: "Since 1965",
      big_image: true,
    },

    {
      id: 15,
      image: "/images/Fondation/share.png",
      title: "Share",
      date: "Since 1965",
      big_image: true,
    },

    {
      id: 16,
      image: "/images/Fondation/Telus.png",
      title: "Telus",
      date: "Since 1965",
      big_image: true,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between gap-6 mb-12">
        <div className="heading font-[Audiowide] text-[30px] sm:text-[45px] leading-[120%]">
          {t("sliderheading")}
        </div>
        <div className="flex items-center gap-3">
          <div
            ref={navigationPrevRef}
            className="flex items-center justify-center w-[45px] h-[45px] border-2 border-white rounded-full cursor-pointer"
          >
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.828 7.50005H16V9.50005H3.828L9.192 14.864L7.778 16.278L0 8.50005L7.778 0.722046L9.192 2.13605L3.828 7.50005Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            ref={navigationNextRef}
            className="flex items-center justify-center w-[45px] h-[45px] border-2 border-white rounded-full cursor-pointer"
          >
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.172 7.50005L6.808 2.13605L8.222 0.722046L16 8.50005L8.222 16.278L6.808 14.864L12.172 9.50005H0V7.50005H12.172Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          465: {
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
          type: "bullets",
          bulletElement: "span",
          bulletClass: "timeline-icon",
          bulletActiveClass: "timeline-icon-active",
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
        className="w-full"
      >
        {data.map((ele) => {
          return (
            <SwiperSlide
              key={ele.id}
              className="transition rounded-lg block overflow-hidden relative"
            >
              <div className="flex flex-col text-center">
                <img
                  src={ele.image}
                  alt="logo"
                  className={`select-none mx-auto ${
                    ele.big_image && ele.big_image === true ? "w-[230px]" : ""
                  }`}
                />
                <div className="text-white font-[600] text-[18px] mt-3 select-none">
                  {ele.title}
                </div>
                <div className="mt-2 select-none">{ele.date}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CausesSlider;
