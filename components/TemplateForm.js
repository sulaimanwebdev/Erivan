import CoverLetterFileUpload from "./CoverLetterFileUpload";
import ResumeFileUpload from "./ResumeFileUpload";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

const TemplateForm = () => {
  const { t } = useTranslation();
  const [coverLetterFile, setCoverLetterFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [fileUploading, setFileUploading] = useState(false);

  //refs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const emailAddressRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const phone = phoneNumberRef.current.value;
    const email = emailAddressRef.current.value;

    const res = await fetch("/api/send-attachments-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phone,
        email,
        coverLetterFile,
        resumeFile,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="">
          <label
            htmlFor="first-name"
            className="text-white font-[600] mb-2 flex"
          >
            {t("contactFirstName")}
            <span className="text-[#FF5757] ml-[2px]">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3 sm9:gap-5">
            <div>
              <input
                ref={firstNameRef}
                type="text"
                placeholder="First name"
                autoComplete="off"
                name="first-name"
                id="first-name"
                className="bg-form-main placeholder-placeholder-main font-[500] text-white px-3.5 py-3 w-full rounded-lg"
              />
            </div>

            <div>
              <input
                ref={lastNameRef}
                type="test"
                placeholder="Last name"
                autoComplete="off"
                name="last-name"
                id="last-name"
                className="bg-form-main placeholder-placeholder-main font-[500] text-white px-3.5 py-3 w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-7">
          <label
            htmlFor="phone-number"
            className="text-white font-[600] mb-2 flex"
          >
            {t("contactFirstNumber")}
            <span className="text-[#FF5757] ml-[2px]">*</span>
          </label>
          <input
            ref={phoneNumberRef}
            type="text"
            placeholder="Phone number"
            autoComplete="off"
            name="phone-number"
            id="phone-number"
            className="bg-form-main placeholder-placeholder-main font-[500] text-white px-3.5 py-3 w-full rounded-lg"
          />
        </div>

        <div className="mt-7">
          <label
            htmlFor="email-address"
            className="text-white font-[600] mb-2 flex"
          >
            {t("contactFirstemail")}
            <span className="text-[#FF5757] ml-[2px]">*</span>
          </label>
          <input
            ref={emailAddressRef}
            type="email"
            placeholder="Email address"
            autoComplete="off"
            name="email-address"
            id="email-address"
            className="bg-form-main placeholder-placeholder-main font-[500] text-white px-3.5 py-3 w-full rounded-lg"
          />
        </div>

        <div className="mt-7">
          <div className="text-white font-[600] mb-2 flex">
            {t("contactFirstCoverletter")}
          </div>
          <CoverLetterFileUpload
            setCoverLetterFile={setCoverLetterFile}
            setFileUploading={setFileUploading}
          />
        </div>

        <div className="mt-7">
          <div className="text-white font-[600] mb-2 flex">
            {t("contactFirstCV")}
            <span className="text-[#FF5757] ml-[2px]">*</span>
          </div>
          <ResumeFileUpload
            setResumeFile={setResumeFile}
            setFileUploading={setFileUploading}
          />
        </div>

        <button
          disabled={fileUploading}
          type="submit"
          className="transition hover:-translate-y-1 mx-auto flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-10 py-3 mt-7"
        >
          {t("contactFirstsubmit")}
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
        </button>
      </form>
    </>
  );
};

export default TemplateForm;
