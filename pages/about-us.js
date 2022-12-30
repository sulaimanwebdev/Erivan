import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkSlider from "../components/WorkSlider";
import ScrollToTop from "../components/ScrollToTop";
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser';

export default function About() {
  const { t } = useTranslation();
  let team = [
    {
      id: 1,
      image: "/images/team1.png",
      name: t("aboutpersononename"),
      title: t("aboutpersononedesgination"),
    },
    {
      id: 2,
      image: "/images/team2.png",
      name: t("aboutpersontwoname"),
      title: t("aboutpersontwodesgination"),
    },
    {
      id: 3,
      image: "/images/team3.png",
      name: t("aboutpersonthreename"),
      title: t("aboutpersonthreedesgination"),
    },
    {
      id: 4,
      image: "/images/team4.png",
      name: t("aboutpersonfourname"),
      title: t("aboutpersonfourdesgination"),
    },
    {
      id: 5,
      image: "/images/team5.png",
      name: t("aboutpersonfivename"),
      title: t("aboutpersonfivedesgination"),
    },
    {
      id: 6,
      image: "/images/team6.png",
      name: t("aboutpersonsixname"),
      title: t("aboutpersonsixdesgination"),
    },
    {
      id: 7,
      image: "/images/team7.png",
      name: t("aboutpersonsevenname"),
      title: t("aboutpersonsevendesgination"),
    },
    {
      id: 8,
      image: "/images/team8.png",
      name: t("aboutpersoneightname"),
      title: t("aboutpersoneightdesgination"),
    },

    {
      id: 10,
      image: "/images/team10.png",
      name: t("aboutpersonninename"),
      title: t("aboutpersonninedesgination"),
    },
    {
      id: 15,
      image: "/images/team14.jpg",
      name: t("aboutpersontenname"),
      title: t("aboutpersontendesgination"),
    },

    {
      id: 9,
      image: "/images/team9.png",
      name: t("aboutpersonelvenname"),
      title: t("aboutpersonelvendesgination"),
    },

    {
      id: 11,
      image: "/images/team11.png",
      name: t("aboutpersonetwelname"),
      title: t("aboutpersonetweldesgination"),
    },
    {
      id: 12,
      image: "/images/team12.png",
      name: t("aboutpersonethirtyname"),
      title: t("aboutpersonethirtydesgination"),
    },
    {
      id: 13,
      image: "/images/team13.png",
      name: t("aboutpersonefourtheenname"),
      title: t("aboutpersonefourtheendesgination"),
    },
    {
      id: 14,
      image: "/images/team15.jpeg",
      name: t("aboutpersonefithtennname"),
      title: t("aboutpersonefithtenndesgination"),
    },
  ];
  return (
    <>
      <Head>
        <title>Erivan</title>
      </Head>

      <div className="bg-dark-main text-content-main">
        <Header />

        <div className="relative w-full">
          <img
            src="/images/tower-bottom.png"
            className="w-full h-full object-cover object-center absolute top-0 left-0"
            alt="about"
          />
          <div className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 flex items-center justify-center">
            <img src="/images/lines.svg" alt="lines" />
          </div>
          <div className="gradient-bg2 absolute top-0 left-0 w-full h-full"></div>
          <div className="mainCont relative z-10 flex items-center justify-center flex-col text-center h-auto py-[80px]">
            <div className="heading font-[Audiowide] text-[50px] sm3:text-[60px] sm:text-[70px] leading-[120%]">
              {t("about")}
            </div>
            <div className="max-w-[900px]">
              <div className="text-[20px] leading-[36px] mt-5 text-white">
                {t("aboutdes")}
              </div>
              <div className="font-[Audiowide] text-[28px] my-8 leading-[120%] text-white">
                {t("aboutag")}
              </div>
              <Link
                href="/careers"
                className="w-fit transition hover:-translate-y-1 mx-auto flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-6 py-3.5 mt-5"
              >
                {t("aboutbtn")}
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
              </Link>
            </div>
          </div>
        </div>

        <div className="mainCont mt-[100px] lg5:mt-[140px] flex lg5:items-center flex-col lg5:flex-row justify-center gap-12 xl:gap-[100px] lg5:gap-6">
          <div className="lg5:max-w-[600px]">
            <div className="heading font-[Audiowide] text-[45px] sm3:text-[55px] lg3:text-[60px] leading-[120%]">
              {t("aboutstoryleftheadingone")}
              <br className="hidden sm3:flex" /> {t("aboutstoryleftheadingtwo")}
            </div>
            <div className="leading-[30px] text-[17px] mt-10">
              {t("aboutstorylefdesc")}
              <br />
              <br />
              {t("aboutstorylefdescbrone")}
              <br />
              <br />
              {parse(t("aboutstorylefdescbrtwo"))}
              <br />
              <br />
              {t("aboutstorylefdescbrthree")}
            </div>
          </div>

          <div className="bg-dark2-main rounded-[24px] p-6 lg5:max-w-[550px] lg5:min-w-[550px]">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* <img src="/images/video.png" className='mx-auto w-full max-w-[600px]' alt="video" /> */}
              <video
                src="/images/video.mp4"
                controls
                controlsList="nodownload"
                className="mx-auto w-full max-w-[600px] rounded-[24px]"
              ></video>
              {/* <button className='bg-dark-main rounded-full flex items-center justify-center min-w-[60px] min-h-[60px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10'><svg width="19" height="20" className='translate-x-[2px]' viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 14.4641C21.1667 12.9245 21.1667 9.0755 18.5 7.5359L6.5 0.607693C3.83333 -0.931908 0.5 0.992596 0.5 4.0718V17.9282C0.5 21.0074 3.83333 22.9319 6.5 21.3923L18.5 14.4641Z" fill="white"/></svg></button> */}
            </div>

            <div className="mt-7">
              <div className="leading-[30px] text-[16px]">
                {t("aboutstoryrightdesc")}
                <br />
                <br />
                {t("aboutstoryrightdescbrone")}
                <br />
                <br />
                {t("aboutstoryrightdescbrtwo")}
              </div>
            </div>
          </div>
        </div>

        <div className="mainCont mt-[120px] lg5:mt-[140px]">
          <WorkSlider />
        </div>

        <div className="bg-dark2-main pb-12 sm3:pb-0 w-full mt-[140px] sm3:h-[850px] sm5:h-[800px]">
          <div className="mainCont relative pt-16">
            <img
              src="/images/logo12.svg"
              className="mx-auto w-[60px] mb-6"
              alt="logo"
            />
            <div className="heading font-[Audiowide] text-[40px] sm:text-[60px] text-center">
              {t("ourOvers")}
            </div>

            <div className="text-[17px] mx-auto max-w-[1100px] mt-8 sm:mt-12">
              {t("ourvaluesone")}
              <br />
              <br />
              {t("ourvaluestwo")}
              <br />
              <br />
              {parse(t("ourvaluesthree"))}
            </div>
          </div>

          <div className="mainCont w-full mx-auto mt-[40px] sm3:mt-[100px]">
            <img
              src="/images/our-values.png"
              className="grayscale w-full"
              alt="our-values"
            />
          </div>
        </div>

        <div className="mainCont flex md:items-center md:justify-center flex-col md:flex-row gap-6 xl:gap-14 md:gap-12 mt-[100px] sm3:mt-[31%] sm:mt-[36%] md3:mt-[30%] lg3:mt-[433px]">
          <div className="heading font-[Audiowide] text-[40px] sm3:text-[50px] leading-[120%]">
            {t("missinone")}
            <br className="hidden md:flex" /> {t("missintwo")}
          </div>
          <div className="text-[20px] leading-[38px] max-w-[890px]">
            <span className=""> {parse(t("ourmisiiondesc"))}</span>
          </div>
        </div>

        <div className="mainCont mt-[130px] md:mt-[180px]">
          <div className="heading font-[Audiowide] text-[40px] sm3:text-[60px] text-center">
            {t("team")}
          </div>
          <div className="grid grid-cols-1 sm2:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10">
            {team.map((ele) => {
              return (
                <div key={ele.id} className="bg-form-main">
                  <img
                    src={ele.image}
                    className="w-full h-[250px] object-cover object-center sm2:h-[300px] grayscale"
                    alt="team"
                  />
                  <div className="text-center py-5 px-3">
                    <div className="text-white font-bold text-[17px]">
                      {ele.name}
                    </div>
                    <div className="mt-2">{ele.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Footer />
      </div>

      <ScrollToTop />
    </>
  );
}
