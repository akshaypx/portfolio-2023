import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-10">
      <div className="  h-20 flex items-center justify-between backdrop-filter backdrop-blur-lg bg-opacity-20 text-white">
        <div className="w-full flex justify-center md:justify-start items-center text-center md:text-left md:pl-10 text-xl">
          <b className="m-5 md:m-0">Akshay.dev</b>
          {!isOpen ? (
            <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          ) : (
            <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="hidden md:flex md:flex-row md:gap-14 md:pr-10 gap-3 pr-3">
          <div
            onClick={() => {
              document
                .getElementById("home")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home
          </div>
          <div
            onClick={() => {
              document
                .getElementById("work")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </div>
          <div
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sticky bg-black text-white flex flex-col gap-10 py-10 transition ease-in-out text-center">
          <div
            onClick={() => {
              document
                .getElementById("home")
                .scrollIntoView({ behavior: "smooth" });
              setIsOpen(!isOpen);
            }}
          >
            Home
          </div>
          <div
            onClick={() => {
              document
                .getElementById("work")
                .scrollIntoView({ behavior: "smooth" });
              setIsOpen(!isOpen);
            }}
          >
            Projects
          </div>
          <div
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
              setIsOpen(!isOpen);
            }}
          >
            Contact
          </div>
        </div>
      )}
    </div>
  );
}
