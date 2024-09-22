import React, { useState } from 'react';
import { FileUpload as UploadComponent } from '../../components/ui/file-upload.jsx';

export default function AiScan() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (files) => {
    setFiles(files);
  };
  const handleButtonClick = () => {
    // Trigger the file upload component
    document.querySelector('#file-upload-trigger').click();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">AI Scanner</h1>
        <UploadComponent onUpload={handleFileUpload} />
        <button 
          onClick={handleButtonClick}
          className="mt-8 px-6 py-2 bg-[#4d309c] hover:bg-[#3f2585] text-white font-semibold rounded-md w-[40vw]">
          UPLOAD FILES
        </button>
      </div>
    </div>
  );
}
