import React, { useRef } from "react";
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
      title: "Action Sport Physio",
      date: "2011",
    },

    {
      id: 2,
      title: "AU Second LIEU",
      date: "2017",
    },

    {
      id: 3,
      title: "Club",
      date: "2010",
    },

    {
      id: 4,
      title: "Centraide United Way",
      date: "1965",
    },

    {
      id: 5,
      title: "Le Grand Defi",
      date: "1965",
      defi: true,
    },

    {
      id: 6,
      title: "Eulalie-Durocher",
      date: "1965",
    },

    {
      id: 7,
      title: "Hopital Charles-LeMoyne",
      date: "1965",
      small_image: true,
    },

    {
      id: 8,
      title: "Charles Bruneau",
      date: "1965",
    },

    {
      id: 9,
      title: "3nfant 5oleil",
      date: "1965",
    },

    {
      id: 10,
      title: "Fondation Pierre",
      date: "1965",
    },

    {
      id: 11,
      title: "Source Bleue",
      date: "1965",
    },

    {
      id: 12,
      title: "Fondation TELUS",
      date: "1965",
    },
    {
      id: 13,
      title: "Fondation TELUS",
      date: "1965",
    },
    {
      id: 14,
      title: "Fondation TELUS",
      date: "1965",
    },
    {
      id: 15,
      title: "Fondation TELUS",
      date: "1965",
    },
    {
      id: 16,
      title: "Fondation TELUS",
      date: "1965",
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
                  src={`/images/Causes/logo${ele.id}.png`}
                  alt="logo"
                  className={`select-none mx-auto ${
                    ele.defi && ele.defi === true ? "w-[80px]" : "w-[150px]"
                  }

                  ${
                    ele.small_image && ele.small_image === true
                      ? "min-w-[230px]"
                      : "w-[150px]"
                  }

                  `}
                />
                <div className="text-white font-[600] text-[18px] mt-3 select-none">
                  {ele.title}
                </div>
                <div className="mt-2 select-none">
                  {t("since")} {ele.date}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CausesSlider;
