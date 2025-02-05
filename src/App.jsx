// src/FormComponent.jsx

import React, { useState } from 'react';
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    amazon_music_identifier: '',
    apple_identifier: '',
    deezer_identifier: '',
    spotify_identifier: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4NzcyOTcwLCJpYXQiOjE3Mzg3NjU3NzAsImp0aSI6ImIxZGRiNDE5ZjcwMDQ3OWJhMzEyODEyODZjZTZmZTE0IiwidXNlcl9pZCI6MjU5fQ.yMcs3v7wscQ93IfBU_Wm_4YrZhyCee8HkUu3wVP2epg"; // Your JWT token

    try {
      const response = await axios.post(
        "https://ra-lykoz-staging.mmd-whitelabel.com/artists",
        formData,
        {
          headers: {
            "x-api-key": "QWOlFCAI.FHpA1xewpV54hV6UlV1i7dlDoT7bJ5TY",
            "Referer": "https://ra-lykoz-staging.mmd-whitelabel.com/artists",// Ensure it matches Postman
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",

          }, // Important if API uses cookies/session
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      if (error.response) {
        console.error("Error Response:", error.response.data);
      } else {
        console.error("Request Failed:", error.message);
      }
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Music Identifiers</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="border p-2 w-full mt-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Amazon Music Identifier</label>
            <input
              type="text"
              name="amazon_music_identifier"
              onChange={handleChange}
              className="border p-2 w-full mt-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Apple Identifier</label>
            <input
              type="text"
              name="apple_identifier"
              onChange={handleChange}
              className="border p-2 w-full mt-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Deezer Identifier</label>
            <input
              type="text"
              name="deezer_identifier"
              onChange={handleChange}
              className="border p-2 w-full mt-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Spotify Identifier</label>
            <input
              type="text"
              name="spotify_identifier"
              onChange={handleChange}
              className="border p-2 w-full mt-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="border p-2 w-full mt-1"
              required
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full mt-4">Add</button>
        </form>
      </div>
    </div>
  );
};

export default App;
