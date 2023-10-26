"use client"

import React, { useState } from 'react';
import axios from 'axios';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status,setStatus] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    brief: '',
    description: '',
    link: '',
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('file', selectedFile);
      data.append('name', formData.name);
      data.append('brief', formData.brief);
      data.append('description', formData.description);
      data.append('link', formData.link);

      const res = await fetch('/api/admin', {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        const responseData = await res.json(); 
        console.log('Server response:', responseData);
        setStatus(true)
      } else {
        console.log('Request failed with status:', res.status);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };
  
  return (
    <>
    {status &&  <div className="flex justify-center items-center bg-green-500 text-white text-center py-2 px-4 rounded-md my-4">
    inserted Succsesfully
    </div>}
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md my-8">
      <h2 className="text-2xl font-semibold mb-4">Image Upload</h2>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label htmlFor="fileInput" className="block text-gray-600 font-medium">
            Choose an image:
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={(e)=> setSelectedFile(e.target.files?.[0])}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600 font-medium">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="brief" className="block text-gray-600 font-medium">
          Brief:
        </label>
        <input
          type="text"
          id="brief"
          value={formData.brief}
          onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-600 font-medium">
          Description:
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="link" className="block text-gray-600 font-medium">
          Link:
        </label>
        <input
          type="text"
          id="link"
          value={formData.link}
          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
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
    </>
  );
}

export default Upload;