import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen flex justify-center bg-gray-50 ">
      <div className=" w-[400px] h-[250px] border-b-2 border-dashed border-gray-300">
        <h2 className="text-lg font-semibold text-gray-800 px-6 py-4 bg-white">Account Settings</h2>

        <div className='p-6'>
          <div className="relative flex mb-4">
          <div>
            <img
              className="w-16 h-16 rounded-full object-cover"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
            />
            <span className="absolute bottom-0 right-64 bg-violet-500 p-1 rounded-full border-2 border-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536M9 11l3 3 8-8m-4 10v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h2"
                />
              </svg>
            </span>
            </div>
            <div className='ml-5'>
            <p className="text-sm font-semibold text-gray-800">Marry Doe</p>
            <p className="text-sm text-gray-600 mb-2">Marry@Gmail.Com</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 leading-snug ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
