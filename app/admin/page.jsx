"use client"
import React, { useState } from 'react';
import axios from 'axios';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      // Read the selected file and convert it to binary data (Buffer)
      const reader = new FileReader();
      reader.onload = async (e) => {
        const binaryData = new Uint8Array(e.target.result);
        const buffer = Buffer.from(binaryData);

        // Send the binary image data to the server
        try {
          const response = await axios.post('/api/admin', buffer, {
            headers: {
              'Content-Type': 'application/octet-stream', // Set the content type
            },
          });

          console.log('Server response:', response.data);
        } catch (err) {
          console.log('Error:', err);
        }
      };

      reader.readAsArrayBuffer(selectedFile);
    } else {
      console.log('No file selected');
    }
    console.log(selectedFile);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Image Upload</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="fileInput" className="block text-gray-600 font-medium">
            Choose an image:
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default Upload;
