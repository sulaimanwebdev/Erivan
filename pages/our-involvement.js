import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CausesSlider from "../components/CausesSlider";
import ScrollToTop from "../components/ScrollToTop";

import { useTranslation } from "react-i18next";
export default function OurInvolvement() {
  const { t } = useTranslation();

  
  return (
    <>
      <Head>
        <title>Erivan</title>
      </Head>

      <div className="bg-dark-main text-content-main">
      <Header page="Involvement"/>


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
            <div className="heading font-[Audiowide] text-[35px] sm4:text-[40px] sm6:text-[45px] sm3:text-[50px] sm:text-[70px] leading-[120%]">
              {t("intitel")}
            </div>
            <div className="max-w-[750px]">
              <div className="text-[17px] sm3:text-[20px] leading-[36px] mt-5 text-white">
                {t("intdesc")}
              </div>
              <Link
                href="/careers"
                className="w-fit transition hover:-translate-y-1 mx-auto flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-6 py-3.5 mt-8"
              >
                {t("intbtn")}
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

        <div className="bg-dark2-main w-full mt-[120px] md5:mt-[170px]">
          <div className="mainCont pt-10 pb-10 md5:pb-0">
            <div className="flex md5:items-end flex-col-reverse md5:flex-row gap-12 md5:-translate-y-[70px]">
              <img
                src="/images/involment.png"
                className="grayscale w-[400px] lg:w-[550px] object-cover rounded-[16px]"
                alt="careers"
              />
              <div className="max-w-[700px]">
                <img
                  src="/images/logo12.svg"
                  className="mb-4 w-[45px]"
                  alt="logo"
                />
                <div className="heading font-[Audiowide] text-[50px] sm5:text-[65px] leading-[120%] uppercase">
                  {t("achiveheading1")}
                  <br className="hidden sm6:flex" /> {t("achiveheading2")}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md4:grid-cols-3 gap-10 mt-12 md5:-translate-y-[60px]">
              <div className="text-[18px] leading-[30px] border-b border-gray-main pb-10">
                {t("achivedesc1")}
              </div>
              <div className="text-[18px] leading-[30px] border-b border-gray-main pb-10">
                {t("achivedesc2")}
              </div>
              <div className="text-[18px] leading-[30px] border-b border-gray-main pb-10">
                {t("achivedesc3")}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mainCont flex items-start lg4:justify-between flex-col lg4:flex-row gap-10 lg4:gap-6 mt-[100px] lg4:mt-[140px]">
            <div className='lg4:max-w-[700px]'>
                <img src="/images/logo13.svg" alt="logo" />
                <div className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod elit massa, sit amet facilisis sem vulputate non.</div>
                <div className="mt-3">Aliquam erat volutpat. Nunc et turpis pharetra, luctus dui vel, sodales turpis. Nam placerat ligula quam, ut rutrum nisi varius in. Proin pellentesque erat a eros molestie, a ultrices felis hendrerit. Nunc quis felis dolor.</div>
            </div>
            <img src="/images/involment1.png" className='grayscale w-full lg4:w-[500px]' alt="involment" />
        </div>
 */}

        <div className="mainCont mt-[120px] lg5:mt-[140px] mb-[150px]">
          <CausesSlider />
        </div>

        <Footer />
      </div>

      <ScrollToTop />
    </>
  );
}
