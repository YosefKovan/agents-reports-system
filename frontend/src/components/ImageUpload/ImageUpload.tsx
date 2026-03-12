import { type FC } from "react";
import { useEffect, useState } from "react";
import "./ImageUpload.css";

interface Props {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const ImageUpload: FC<Props> = ({ file, setFile }) => {
  const [fileDataURL, setFileDataURL] = useState<string | undefined>(undefined);

  const changeHandler = (e: any) => {
    const file = e.target.files[0];
    setFile(file);
  };

  useEffect(() => {
    if (!file) {
      setFileDataURL(undefined);
    }

    let fileReader: FileReader | undefined;
    let isCancel: boolean = false;

    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const result: string | ArrayBuffer | null | undefined =
          e.target?.result;
        if (typeof result === "string" && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  function handleDeleteImage() {
    setFileDataURL(undefined);
    setFile(null);
  }

  return (
    <div className="upload-btn">
      <label htmlFor={"upload-img"} className="upload-img-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024"><rect width="1024" height="1024" fill="none"/><path fill="#fff" d="M544 864V672h128L512 480L352 672h128v192H320v-1.6c-5.4.3-10.5 1.6-16 1.6A240 240 0 0 1 64 624a239 239 0 0 1 212.6-237.2A240 240 0 0 1 512 192a240 240 0 0 1 235.5 194.8A239 239 0 0 1 959.9 624a240 240 0 0 1-240 240c-5.3 0-10.5-1.3-16-1.6v1.6z"/></svg>
        Upload Image
      </label>
      <input id="upload-img" type="file" onChange={changeHandler} accept="images/*"/>
      {file && <div className="file-name">
        {file.name}
      </div>}
      {fileDataURL && (
        <div className="img-preview-container">
          <button onClick={handleDeleteImage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="#e10000"
                d="M5 21V6H4V4h5V3h6v1h5v2h-1v15zm2-2h10V6H7zm2-2h2V8H9zm4 0h2V8h-2zM7 6v13z"
              />
            </svg>
          </button>
          <img
            alt="not found"
            width={"250px"}
            src={fileDataURL}
            className="img-preview"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
