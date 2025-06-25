import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-10 pb-4 px-4 md:px-16">
      {/* Top section: Links and Newsletter */}
      <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:items-start lg:text-left gap-10 pb-8 border-b border-base-300 w-full">
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left flex-wrap gap-8 w-full lg:w-auto">
          <nav className="min-w-[140px]">
            <h6 className="footer-title mb-2 text-lg font-semibold">
              Services
            </h6>
            <a className="link link-hover block mb-1">Branding</a>
            <a className="link link-hover block mb-1">Design</a>
            <a className="link link-hover block mb-1">Marketing</a>
            <a className="link link-hover block">Advertisement</a>
          </nav>
          <nav className="min-w-[140px]">
            <h6 className="footer-title mb-2 text-lg font-semibold">Company</h6>
            <a className="link link-hover block mb-1">About us</a>
            <a className="link link-hover block mb-1">Contact</a>
            <a className="link link-hover block mb-1">Jobs</a>
            <a className="link link-hover block">Press kit</a>
          </nav>
          <nav className="min-w-[140px]">
            <h6 className="footer-title mb-2 text-lg font-semibold">Legal</h6>
            <a className="link link-hover block mb-1">Terms of use</a>
            <a className="link link-hover block mb-1">Privacy policy</a>
            <a className="link link-hover block">Cookie policy</a>
          </nav>
        </div>
        <form className="w-full max-w-xs sm:max-w-sm lg:max-w-xs mt-4 lg:mt-0 flex flex-col items-center text-center lg:items-start lg:text-left">
          <h6 className="footer-title mb-2 text-lg font-semibold">
            Newsletter
          </h6>
          <fieldset className="w-full">
            <label className="block mb-2 text-sm">
              Enter your email address
            </label>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered rounded-md sm:rounded-l-md sm:rounded-r-none w-full focus:outline-none"
              />
              <button className="btn btn-primary rounded-md sm:rounded-l-none sm:rounded-r-md mt-2 sm:mt-0 w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      {/* Bottom section: Copyright and Social */}
      <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-center md:text-left mt-6 gap-4 w-full">
        <aside className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-2 sm:gap-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-primary"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <span className="text-sm">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </span>
        </aside>
        <nav className="flex gap-3 flex-wrap justify-center md:justify-end">
          <a
            href="#"
            className="rounded-full bg-base-100 p-2 shadow hover:bg-primary hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="rounded-full bg-base-100 p-2 shadow hover:bg-primary hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="rounded-full bg-base-100 p-2 shadow hover:bg-primary hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;