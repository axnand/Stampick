import React, { useState } from 'react';
import { FileUpload as UploadComponent } from '../../components/ui/file-upload.jsx';

export default function AiScan() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (files) => {
    setFiles(files);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">AI Scanner</h1>
        <UploadComponent onUpload={handleFileUpload} />
      </div>
    </div>
  );
}
