// src/pages/LandingPage.tsx
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-end justify-center ">
      <div className="w-[375px] bg-white p-8 rounded-lg mb-5">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Welcome to PopX</h1>
        <p className="text-gray-600 text-m mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <Link to="/signup">
          <button className="w-full bg-[#6C25FF] text-white font-semibold py-3 rounded mb-4">
            Create Account
          </button>
        </Link>
        <Link to="/login">
          <button className="w-full bg-[#EFE8FF] text-[#6C25FF] font-semibold py-3 rounded">
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  );
}
