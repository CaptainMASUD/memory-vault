import React from 'react'
import { FaHeart, FaSmile, FaEnvelope, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 ">
      <div className="container mx-auto px-4 text-center">
        {/* Main Message */}
        <p className="text-lg font-semibold text-purple-300">
          “A memory vault for friends, made with love and laughter.”
        </p>
        <p className="mt-2 text-sm text-gray-400">
          Cherishing moments, one memory at a time. Thank you for being a part of this journey.
        </p>

        {/* Links Section */}
        <div className="flex justify-center mt-6 space-x-8">
          <a href="/about" className="hover:text-purple-400 transition-colors duration-300">
            About
          </a>
          <a href="/friends" className="hover:text-purple-400 transition-colors duration-300">
            Friends
          </a>
          <a href="/contact" className="hover:text-purple-400 transition-colors duration-300">
            Contact
          </a>
          <a href="/terms" className="hover:text-purple-400 transition-colors duration-300">
            Terms
          </a>
        </div>

        {/* Social & Icons */}
        <div className="flex justify-center mt-6 space-x-6 text-xl">
          <a href="mailto:someone@example.com" className="hover:text-purple-400 transition-colors duration-300">
            <FaEnvelope />
          </a>
          <a href="https://github.com/CaptainMASUD" className="hover:text-purple-400 transition-colors duration-300">
            <FaGithub />
          </a>
          <span className="text-purple-400">
            <FaHeart /> <FaSmile />
          </span>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Your Memory Vault. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
