import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen flex  justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create your<br />PopX account</h2>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">Full Name<span className="text-red-500">*</span></label>
            <input type="text" placeholder="Marry Doe" className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          {/* Phone number */}
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">Phone number<span className="text-red-500">*</span></label>
            <input type="text" placeholder="Marry Doe" className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50" />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">Email address<span className="text-red-500">*</span></label>
            <input type="email" placeholder="Marry Doe" className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50" />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">Password <span className="text-red-500">*</span></label>
            <input type="password" placeholder="Marry Doe" className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50" />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">Company name</label>
            <input type="text" placeholder="Marry Doe" className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50" />
          </div>

          {/* Radio Buttons */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Are you an Agency?<span className="text-red-500">*</span></label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center text-sm">
                <input type="radio" name="agency" className="accent-purple-600" />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center text-sm">
                <input type="radio" name="agency" className="accent-purple-600" />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
