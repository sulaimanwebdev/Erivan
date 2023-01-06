import React from "react";
import { FileUploader } from "react-drag-drop-files";
// const fileTypes = ['JPEG', 'PNG', 'GIF', 'SVG', ];

const CoverLetterFileUpload = ({ setCoverLetterFile, setFileUploading }) => {
  const [file, setFile] = React.useState(null);

  const handleChange = async (f) => {
    setFileUploading(true);
    setFile(f);

    const formData = new FormData();
    formData.append("file", f);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_RESOURCES_BASE_URL}/action/add-item`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    setCoverLetterFile(data?.url);
    setFileUploading(false);
  };

  return (
    <>
      <FileUploader
        handleChange={handleChange}
        name="file"
        // types={fileTypes}
        classes="uploadCont"
        hoverTitle=" "
      >
        <div className="w-full overflow-hidden text-gray-main px-3 py-8 rounded-lg outline-none mt-4 min-w-full bg-form-main cursor-pointer">
          <div className="flex items-center justify-center flex-col gap-2 h-full min-h-[70px] rounded-xl">
            <svg
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33268 21.3333H24.666V12H27.3327V22.6667C27.3327 23.0203 27.1922 23.3594 26.9422 23.6095C26.6921 23.8595 26.353 24 25.9993 24H1.99935C1.64573 24 1.30659 23.8595 1.05654 23.6095C0.806491 23.3594 0.666016 23.0203 0.666016 22.6667V12H3.33268V21.3333ZM15.3327 8V17.3333H12.666V8H5.99935L13.9993 0L21.9993 8H15.3327Z"
                fill="#C4C5C7"
              />{" "}
            </svg>
            <div className="mt-2">
              Click or drag a file to this area to upload.
            </div>
          </div>
          <p className="text-center mt-2">
            {file ? `File name: ${file.name}` : ""}
          </p>
        </div>
      </FileUploader>
    </>
  );
};

export default CoverLetterFileUpload;
