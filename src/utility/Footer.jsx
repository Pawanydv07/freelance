import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t mt-10">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-white">
          <span>Copyright © 2024 LogicalSir</span>
          <span className="mx-2">|</span>
          <a href="/help-center" className="hover:underline text-white">Help Center</a>
          <span className="mx-2">|</span>
          <a href="/jobs" className="hover:underline text-white">Jobs</a>
          <span className="mx-2">|</span>
          <a href="/bug-bounty" className="hover:underline text-white">Bug Bounty</a>
          <span className="mx-2">|</span>
          <a href="/assessment" className="hover:underline text-white">Assessment</a>
          <span className="mx-2">|</span>
          <a href="/students" className="hover:underline text-white">Students</a>
          <span className="mx-2">|</span>
          <a href="/terms" className="hover:underline text-white">Terms</a>
          <span className="mx-2">|</span>
          <a href="/privacy-policy" className="hover:underline text-white">Privacy Policy</a>
        </div>
        <div className="flex items-center">
          <span className="text-white mr-2">India</span>
          <img src="https://cdn.jsdelivr.net/npm/flag-icons@6.0.0/flags/4x3/in.svg" alt="India" className="w-5 h-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
