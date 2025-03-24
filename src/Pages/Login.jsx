// src/pages/Login.tsx

import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-sm p-8 bg-white shadow-sm rounded-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          Signin to your<br />PopX account
        </h2>
        <p className="text-gray-500 text-m mb-6">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>

        <div className="mb-4">
          <label className="block text-xs font-medium text-[#6C25FF] mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF] text-sm"
          />
        </div>

        <div className="mb-6">
          <label className="block text-xs font-medium text-[#6C25FF] mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF] text-sm"
          />
        </div>

        <button
          className="w-full py-2 bg-gray-300 text-white font-medium rounded-md cursor-not-allowed"
          disabled
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
