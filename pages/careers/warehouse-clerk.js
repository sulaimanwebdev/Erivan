import {useEffect} from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TemplateForm from "../../components/TemplateForm";
import ScrollToTop from "../../components/ScrollToTop";

import { useTranslation } from "react-i18next";
export default function WarehouseClerk() {
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.classList.remove('scroll-smooth')
    document.body.classList.remove('scroll-smooth')
   }, [])

  return (
    <>
      <Head>
        <title>Erivan</title>
      </Head>

      <div className="bg-dark-main text-content-main">
        <Header />

        <div className="relative w-full">
          <img
            src="/images/clerk.png"
            className="grayscale w-full h-full object-cover object-center absolute top-0 left-0"
            alt="cover"
          />
          <div className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 flex items-center justify-center">
            <img src="/images/lines.svg" alt="lines" />
          </div>
          <div className="gradient-bg2 absolute top-0 left-0 w-full h-full"></div>
          <div className="mainCont relative z-10 flex items-center justify-center flex-col text-center h-auto py-[80px] md:min-h-[500px]">
            <div className="heading font-[Audiowide] text-[40px] sm9:text-[50px] sm:text-[70px] leading-[120%]">
              {t("warehouseheading")}
            </div>
          </div>
        </div>

        <div className="mainCont mt-[80px] md:mt-[120px]">
          <div className="heading font-[Audiowide] text-[35px] sm10:text-[40px] sm:text-[60px] text-center">
            {t("warehousedesc")}
          </div>
          <div className="text-[17px] mx-auto max-w-[1100px] mt-8 sm:mt-12 leading-[28px]">
            {t("warehousedescllong1")}
            <br />
            <br />
            {t("warehousedescllong2")}
          </div>
        </div>

        <div className="mainCont grid grid-cols-1 lg4:grid-cols-2 gap-6 mt-[100px] lg4:mt-[140px]">
          <div className="bg-form-main rounded-[24px] p-6">
            <div className="text-white font-[500] text-[22px]">
              {t("crequirement")}
            </div>
            <div className="flex gap-4 flex-col mt-5">
              <div className="flex items-start gap-5">
                <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                <div className="text-[17px] leading-[30px]">
                  {t("crequirement1")}
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                <div className="text-[17px] leading-[30px]">
                  {t("crequirement2")}
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                <div className="text-[17px] leading-[30px]">
                  {t("crequirement3")}
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                <div className="text-[17px] leading-[30px]">
                  {t("crequirement4")}
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                <div className="text-[17px] leading-[30px]">
                  {t("crequirement5")}
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                <div className="text-[17px] leading-[30px]">
                  {t("crequirement6")}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-form-main rounded-[24px] p-6">
            <div className="text-white font-[500] text-[22px]">
              {t("crequirementskill")}
            </div>
            <div className="flex gap-4 flex-col mt-5">
              <div className="flex items-start gap-5">
                <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                <div className="text-[17px] leading-[30px]">
                  {t("crequirement7")}
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                <div className="text-[17px] leading-[30px]">
                  {" "}
                  {t("crequirement8")}
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                <div className="text-[17px] leading-[30px]">
                  {" "}
                  {t("crequirement9")}
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                <div className="text-[17px] leading-[30px]">
                  {" "}
                  {t("crequirement10")}
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                <div className="text-[17px] leading-[30px]">
                  {t("crequirement11")}
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-content-main min-w-[12px] min-h-[12px] translate-y-[9px]"></div>
                <div className="text-[17px] leading-[30px]">
                  {t("crequirement12")}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto mt-[80px]">
          <div className="mainCont">
            <TemplateForm />
          </div>
        </div>

        <Footer />
      </div>

      <ScrollToTop />
    </>
  );
}
