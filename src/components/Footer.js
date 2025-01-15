import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-white py-4">
    <div className="container">
      {/* Copyright */}
      <div className="text-center mt-1">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Shriti Nandanwar. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
