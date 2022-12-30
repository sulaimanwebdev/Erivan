import { useTranslation } from "react-i18next";
const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <>
      <form>
        <div>
          <label htmlFor="name" className="text-white font-[600] mb-2 flex">
            {t("homeconactname")}
          </label>
          <input
            type="text"
            placeholder={t("homeconactname")}
            autoComplete="off"
            name="name"
            id="name"
            className="bg-form-main placeholder-placeholder-main font-[500] text-white px-3.5 py-3 w-full rounded-lg"
          />
        </div>

        <div className="mt-7">
          <label htmlFor="email" className="text-white font-[600] mb-2 flex">
            {t("homeconactemail")}
          </label>
          <input
            type="email"
            placeholder={t("homeconactemailPlaceHolder")}
            autoComplete="off"
            name="email"
            id="email"
            className="bg-form-main placeholder-placeholder-main font-[500] text-white px-3.5 py-3 w-full rounded-lg"
          />
        </div>

        <div className="mt-7">
          <label htmlFor="message" className="text-white font-[600] mb-2 flex">
            {t("homeconactcomment")}
          </label>
          <textarea
            type="message"
            placeholder={t("homeconactmessagePlaceHolder")}
            autoComplete="off"
            name="message"
            id="message"
            className="bg-form-main resize-none min-h-[150px] placeholder-placeholder-main font-[500] text-white px-3.5 py-3 w-full rounded-lg"
          ></textarea>
        </div>

        <button
          type="submit"
          className="transition hover:-translate-y-1 mx-auto flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-10 py-3 mt-5"
        >
          {t("submit")}
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

export default ContactForm;
