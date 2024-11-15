import React, { useState } from "react";
import { FaTools } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { Toast } from "flowbite-react";

const UnderMaintenance = () => {
  const [notified, setNotified] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleNotify = () => {
    setNotified(true);
    setShowToast(true);

    // Hide the toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4">
      {/* Animated Icon Section */}
      <div className="relative flex items-center justify-center">
        <div className="absolute animate-spin-slow rounded-full border-t-4 border-b-4 border-white h-28 w-28"></div>
        <FaTools className="text-6xl z-10" />
      </div>

      {/* Heading */}
      <h1 className="mt-8 text-5xl font-extrabold text-center drop-shadow-lg">
        We’re Under Maintenance!
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-lg text-center opacity-90">
        We are making some improvements to serve you better. <br />
        Hang tight, we’ll be back soon.
      </p>

      {/* Notification Button */}
      <button
        onClick={handleNotify}
        disabled={notified}
        className={`px-6 py-3 mt-6 font-bold rounded-lg shadow-lg transition-transform transform ${
          notified
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-white text-blue-500 hover:bg-gray-100 hover:scale-105"
        }`}
      >
        {notified ? "Notified" : "Notify Me"}
      </button>

      {/* Footer with Time Icon */}
      <div className="mt-10 flex items-center space-x-2 text-sm opacity-80">
        <MdOutlineAccessTime className="text-lg" />
        <span>Estimated Time: A few hours</span>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3 text-sm font-normal">
              You’ll be notified when we’re back!
            </div>
            <Toast.Toggle />
          </Toast>
        </div>
      )}
    </div>
  );
};

export default UnderMaintenance;
