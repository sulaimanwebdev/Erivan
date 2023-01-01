import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import imb from "../i18n";
import parse from 'html-react-parser';

const Header = ({page}) => {
  const { t } = useTranslation();
  const changelangauefunc = () => {
    imb.changeLanguage("fr");
  };
  const changelangauefuncc = () => {
    imb.changeLanguage("en");
  };
  const [navBar, setnavBar] = useState("translate-x-full");

  return (
    <>
      <div className="mainCont relative z-[50] py-8 flex items-center justify-between gap-3">
        <div className="flex items-center lg10:gap-6 lg8:gap-7 w-full lg10:w-auto uppercase">
          <Link href="/" className="w-fit">
            <img
              src="/images/logo.svg"
              className="w-[200px] lg2:w-auto"
              alt="logo"
            />{" "}
          </Link>
          <div
            className={`${navBar} lg10:translate-x-0 transition flex gap-7 px-[25px] z-[999] flex-col lg10:flex-row bg-dark-main lg10:bg-transparent fixed top-0 right-0 w-full sm2:w-[400px] pb-7 lg10:pb-0 pt-[92px] lg10:pt-0 sm2:border-l-2 border-content-main lg10:border-0 overflow-y-auto max-h-screen h-screen lg10:h-auto lg10:w-auto bg- lg10:relative lg10:top-auto lg10:right-auto`}
          >
            <Link
              href="/"
              className={`font-semibold transition hover:-translate-y-1 ${page && page === "Home" ? "text-white" : ""}`}
            >
              {t("home")}
            </Link>
            <Link
              href="/about-us"
              className={`font-semibold transition hover:-translate-y-1 ${page && page === "About" ? "text-white" : ""}`}
            >
              {t("about")}
            </Link>
            <Link
              href="/experiences-&-services"
              className={`font-semibold transition hover:-translate-y-1 ${page && page === "Services" ? "text-white" : ""}`}
            >
              {t("ex")}
            </Link>
            <Link
              href="/careers"
              className={`font-semibold transition hover:-translate-y-1 ${page && page === "Careers" ? "text-white" : ""}`}
            >
              {t("ca")}
            </Link>
            <Link
              href="/our-involvement"
              className={`font-semibold transition hover:-translate-y-1 ${page && page === "Involvement" ? "text-white" : ""}`}
            >
              {t("in")}
            </Link>
            <Link
              href="/contact-us"
              className={`font-semibold transition hover:-translate-y-1 ${page && page === "Contact" ? "text-white" : ""}`}
            >
              CONTACT
            </Link>

            <div className="flex sm2:hidden items-center gap-5">
              <div className="flex items-center gap-1 text-white">
                <button onClick={changelangauefuncc}>
                  {parse(t("langEN"))}
                </button>
                <div>|</div>
                <button onClick={changelangauefunc}>{parse(t("langFR"))}</button>
              </div>

              
            </div>

            <button
              onClick={() => {
                setnavBar("translate-x-full");
              }}
              className="flex lg10:hidden absolute top-[30px] right-[25px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden sm2:flex items-center gap-3">
              <div className="flex items-center gap-1 text-white">
                <button onClick={changelangauefuncc}>
                  {parse(t("langEN"))}
                </button>
                <div>|</div>
                <button onClick={changelangauefunc}>{parse(t("langFR"))}</button>
              </div>

         
        </div>

        <button
          onClick={() => {
            setnavBar("translate-x-0");
          }}
          className="flex lg10:hidden sm2:ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <div
          onClick={() => {
            setnavBar("translate-x-full");
          }}
          className={`fixed left-0 top-0 w-full h-screen bg-black bg-opacity-80 blur-lg z-[99] lg10:hidden ${
            navBar === "translate-x-0" ? "flex" : "hidden"
          }`}
        ></div>
      </div>
    </>
  );
};

export default Header;
