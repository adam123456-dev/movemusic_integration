// src/FormComponent.jsx

import React, { useState } from 'react';

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

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4NzY4MjY1LCJpYXQiOjE3Mzg3NjEwNjUsImp0aSI6IjA2N2I3NDM2MTAwNzQ3MGM5ZGNjMzg4ODVkZGFmZTlkIiwidXNlcl9pZCI6MjU5fQ.HVdgrjJBsJNzSuJgj0DKJjT0A48h_vQNETTnJ-tb-xQ';

    try {
      const response = await fetch('https://ra-lykoz-staging.mmd-whitelabel.com/artists', {
        method: 'POST',
        headers: {
          'x-api-key': 'QWOlFCAI.FHpA1xewpV54hV6UlV1i7dlDoT7bJ5TY',
          'Referer': 'https://ra-lykoz-staging.mmd-whitelabel.com',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response)

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message)
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
