import React from "react";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-rose-700 py-10 px-4 sm:px-12  lg:px-24 mt-20">
      
      {/* Top Section */}
      <div className="max-w-7xl text-white mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 border-b border-amber-700 pb-8 text-center sm:text-left">

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer">Find A Store</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer">Get Help</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer">About FabriQ</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-between pt-6 text-sm text-white text-center sm:text-left">

        <p>© 2025 FabriQ. All rights reserved.</p>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <span className="cursor-pointer">Terms of Sale</span>
          <span className="cursor-pointer">Terms of Use</span>
          <span className="cursor-pointer">Privacy Policy</span>
          <span className="cursor-pointer">Cookies</span>
        </div>

        {/* Country */}
        <div className="flex items-center gap-2">
          <Globe size={16} />
          <span>India</span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
