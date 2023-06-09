import { useState } from "react";
import styles from "./ContactMe.module.css";
export default function ContactMe() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //send email
    window.open(
      `mailto:akshaysrivastava46@gmail.com?subject=${title}&body=${message}`
    );
    //clear states
    setTitle("");
    setMessage("");
  };
  return (
    <div
      className="md:h-screen md:flex sm:h-max justify-center items-center text-white bg-gradient-to-b from-gray-800 to-indigo-800"
      id="contact"
    >
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center items-center gap-5 text-4xl my-20 md:my-0 md:text-8xl">
          <h1 className={styles["heading-1"]}>Contact Me</h1>
        </div>
      </div>
      <div
        className={`h-full w-full flex flex-col justify-center items-center `}
      >
        <div className="w-2/3 flex flex-col justify-center items-center gap-5 bg-gray-700 border-2 border-gray-600 rounded-2xl px-8 py-12 backdrop-blur-3xl ">
          <input
            className="w-full p-5 rounded-xl focus-visible:border-none  bg-gray-600 text-xl"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full  p-5 rounded-xl focus-visible:border-none  bg-gray-600 text-xl"
            rows="2"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="w-full bg-indigo-800 px-4 py-4 rounded-xl text-xl hover:bg-indigo-700 transition ease-in-out"
            onClick={(e) => handleSubmit(e)}
          >
            Send
          </button>
          <span className="text-indigo-100">
            An email with the message will be sent to me!
          </span>
        </div>
      </div>
    </div>
  );
}
