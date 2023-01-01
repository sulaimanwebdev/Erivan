import {useEffect} from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import { useTranslation } from "react-i18next";

export default function Careers() {
  const { t } = useTranslation();
  let team = [
    {
      id: 1,
      image: "/images/athena-worker.png",
      title: t("card1t"),
      desc: t("card1d"),
      link: "/careers/line-and-antenna-worker",
    },
    {
      id: 2,
      image: "/images/manager.png",
      title: t("card2t"),
      desc: t("card2d"),
      link: "/careers/project-manager",
    },
    {
      id: 3,
      image: "/images/construction-worker.png",
      title: t("card3t"),
      desc: t("card3d"),
      link: "/careers/construction-worker",
    },
    {
      id: 4,
      image: "/images/carpenter.png",
      title: t("card4t"),
      desc: t("card4d"),
      link: "/careers/carpenter",
    },
    {
      id: 5,
      image: "/images/clerk.png",
      title: t("card5t"),
      desc: t("card5d"),
      link: "/careers/warehouse-clerk",
    },
  ];

   useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
    document.body.classList.add('scroll-smooth')
   }, [])
   

  return (
    <>
      <Head>
        <title>Erivan</title>
      </Head>

      <div className="bg-dark-main text-content-main">
      <Header page="Careers"/>

        <div className="relative w-full">
          <img
            src="/images/careers.png"
            className="grayscale w-full h-full object-cover object-center absolute top-0 left-0"
            alt="cover"
          />
          <div className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 flex items-center justify-center">
            <img src="/images/lines.svg" alt="lines" />
          </div>
          <div className="gradient-bg2 absolute top-0 left-0 w-full h-full"></div>
          <div className="mainCont relative z-10 flex items-center justify-center flex-col text-center h-auto py-[80px]">
            <div className="heading font-[Audiowide] text-[50px] sm3:text-[60px] sm:text-[70px] leading-[120%]">
              {t("c")}
            </div>
            <div className="max-w-[900px]">
              <div className="text-[20px] leading-[36px] mt-5 text-white">
                {t("cdes")}
              </div>
              <a
                href="#careers"
                className="w-fit transition hover:-translate-y-1 mx-auto flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-6 py-3.5 mt-8"
              >
                {t("cbtn")}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mainCont mt-[100px] lg4:mt-[140px] flex lg4:items-center lg4:justify-between flex-col-reverse lg4:flex-row gap-10">
          <img
            src="/images/careers2.png"
            className="grayscale h-[450px] xl:h-[500px] object-cover rounded-[16px]"
            alt="careers"
          />
          <div className="lg4:max-w-[700px]">
            <img
              src="/images/logo12.svg"
              className="mb-4 w-[45px]"
              alt="logo"
            />
            <div className="heading font-[Audiowide] text-[50px] sm3:text-[60px] leading-[120%]">
              {t("ptrain")}
              <br /> {t("ptraint")}
            </div>
            <div className="mt-3 text-[20px] leading-[36px]">
              {t("ptraindes")}
            </div>
          </div>
        </div>

        <div className="bg-dark2-main pb-[20px] sm:pb-0 w-full mt-[140px] sm:h-[800px]">
          <div className="mainCont relative pt-16">
            <div className="flex items-start lg4:justify-between flex-col lg4:flex-row gap-5 mx-auto max-w-[1300px]">
              <div className="heading font-[Audiowide] text-[40px] md5:text-[50px] lg3:text-[60px] leading-[120%] uppercase">
                {t("pcarr1")}
                <br className="hidden lg3:flex" /> {t("pcarr2")}
                <br className="hidden lg3:flex" /> {t("pcarr3")}
                <br className="hidden lg3:flex" /> {t("pcarr4")}
              </div>
              <img
                src="/images/careers3.png"
                className="grayscale max-w-[450px] lg3:max-w-[600px] hidden lg4:flex"
                alt="careers"
              />
            </div>
            <div className="mt-6 text-[18px] md:text-[22px] max-w-[1200px]">
              {t("pcarrdesc")}
            </div>
          </div>

          <div className="mainCont w-full mx-auto mt-[40px] sm3:mt-[100px]">
            <img
              src="/images/people.png"
              className="grayscale rounded-[16px] w-full max-w-[1200px] mx-auto max-h-[400px] object-cover object-top"
              alt="people"
            />
          </div>
        </div>

        <div className="mainCont mt-[20px] sm:mt-[60px] lg4:mt-[180px] lg3:mt-[250px]">
          <div className="mx-auto lg4:max-w-[1200px]">
            <div className="heading font-[Audiowide] sm:mx-auto sm:text-center text-[30px] sm:text-[40px] md5:text-[65px] leading-[120%] uppercase">
              {t("carrins1")}
              <br className="hidden md5:flex" /> {t("carrins2")}
            </div>
            <div className="text-[16px] sm:text-[22px] mt-6">
              {t("carrinsdesc1")}
            </div>
            <div className="text-[16px] sm:text-[22px] mt-5">
              {t("carrinsdesc2")}
            </div>
          </div>
        </div>

        <div id="careers" className="mainCont mt-[130px] md:mt-[180px]">
          <div className="heading font-[Audiowide] text-[40px] md3:text-[50px] md4:text-[60px] text-center">
            {t("carrpos")}
          </div>
          <div className="relative grid grid-cols-1 sm8:grid-cols-2 lg4:grid-cols-3 gap-7 mt-10">
            {team.map((ele) => {
              return (
                <Link
                  href={ele.link}
                  key={ele.id}
                  className="group bg-form-main relative block overflow-hidden"
                  onClick={()=>{
                    document.documentElement.classList.remove('scroll-smooth')
                    document.body.classList.remove('scroll-smooth')
                  }}
                >
                  <img
                    src={ele.image}
                    className="w-full transition max-h-[200px] lg4:max-h-[250px] object-cover object-center sm2:h-auto grayscale group-hover:scale-110 group-hover:opacity-50"
                    alt="team"
                  />
                  <div className="py-5 pb-[120px] px-3">
                    <div className="text-white font-bold text-[18px]">
                      {ele.title}
                    </div>
                    <div className="mt-2 text-[15px]">{ele.desc}</div>
                    <div className="transition hover:-translate-y-1 absolute bottom-[22px] left-[12px] flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-6 py-3.5">
                      {t("card1btn")}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="hidden absolute top-[100px] left-1/2 -translate-x-1/2 md5:flex items-center justify-center font-[600] gap-3 bg-white text-black border border-content-main w-fit rounded-xl px-6 py-3.5 translate-y-[50px] group-hover:translate-y-0 transition opacity-0 group-hover:opacity-100">
                      {t("card1btn")}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}

            <div className="hidden sm8:flex items-center justify-center">
              <img
                src="/images/tower2.png"
                className="h-[550px] -mb-[100px]"
                alt="tower"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <ScrollToTop />
    </>
  );
}
