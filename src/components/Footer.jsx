import React from "react";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyan-500 py-12 px-6 sm:px-12 lg:px-24 mt-20">
      <div className="max-w-7xl text-white mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 border-b border-amber-700 pb-10">
        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li className=" cursor-pointer">Find A Store</li>
            
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li className=" cursor-pointer">Get Help</li>
            
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className=" cursor-pointer">About FabriQ</li>
            
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center pt-6 text-sm ">
        <p>© 2025 FabriQ. All rights reserved.</p>

        <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
          <span className=" cursor-pointer">Terms of Sale</span>
          <span className=" cursor-pointer">Terms of Use</span>
          <span className=" cursor-pointer">Privacy Policy</span>
          <span className=" cursor-pointer">Cookies</span>
        </div>

        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <Globe size={16} />
          <span>India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
