import { type FC } from "react";
import { useEffect, useState } from "react";


interface Props{
    file : File | null;
    setFile : React.Dispatch<React.SetStateAction<File | null>>
}

const ImageUpload : FC<Props> = ({file, setFile})=>{
    
    const [fileDataURL, setFileDataURL] = useState<string | undefined>(undefined);
     
    const changeHandler = (e: any) => {
        const file = e.target.files[0];
        setFile(file);
      };
    
      useEffect(() => {
        let fileReader: FileReader | undefined;
        let isCancel: boolean = false;
    
        if (file) {
          fileReader = new FileReader();
          fileReader.onload = (e) => {
            const result: string | ArrayBuffer | null | undefined = e.target?.result;
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
    
    return(
    <div className="upload-btn">
          <input type="file" onChange={changeHandler} />
          {fileDataURL && (
            <div className="img-preview-container">
              <button onClick={handleDeleteImage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="#e10000" d="M5 21V6H4V4h5V3h6v1h5v2h-1v15zm2-2h10V6H7zm2-2h2V8H9zm4 0h2V8h-2zM7 6v13z"/></svg>             
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
    )
}

export default ImageUpload;