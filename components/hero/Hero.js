import Image from "next/image";
import Button from "../button/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex md:flex-row justify-center w-full items-center md:p-20 md:pt-0 h-screen bg-gradient-to-t from-gray-800 to-indigo-800">
      <div className=" text-white w-1/2 text-center md:text-left">
        <b className="text-4xl md:text-6xl">
          <span
            className={`${styles["hero-font"]} bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent`}
          >
            Front-End React Developer
          </span>
          👋
        </b>

        <br />
        <div>
          <div>
            <p className="text-gray-400 md:w-3/4 my-4">
              Hi, I&apos;m Akshay Srivastava. A passionate Front-end React
              Developer beased in Gurugram, India.
            </p>
          </div>

          {/* <Button variant="secondary">Download CV</Button> */}
          <button className="w-fit bg-indigo-500 text-indigo-100 px-5 py-3 rounded-full text-xl hover:bg-indigo-400 transition ease-in-out">
            Download CV
          </button>

          <div className="my-14 text-xl flex flex-wrap gap-6">
            <Image
              className="w-10 h-10"
              src={"/html-icon.png"}
              height={"100"}
              width={"100"}
              alt=""
            />
            <Image
              className="w-10 h-10"
              src={"/css-icon.png"}
              height={"100"}
              width={"100"}
              alt=""
            />
            <Image
              className="w-10 h-10"
              src={"/javascript-programming-language-icon.png"}
              height={"100"}
              width={"100"}
              alt=""
            />
            <Image
              className="w-10 h-10"
              src={"/react-js-icon.png"}
              height={"100"}
              width={"100"}
              alt=""
            />
            <Image
              className="w-20 h-10"
              src={"/tailwind-css-icon.png"}
              height={"100"}
              width={"100"}
              alt=""
            />
            <Image
              className="w-28 h-10"
              src={"/nextjs-icon.png"}
              height={"100"}
              width={"100"}
              alt=""
            />
          </div>
        </div>
      </div>

      <Image
        className="mt-48 mb-10 md:m-0 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-1/4 border-2 rounded-full border-indigo-400"
        src={"/pfp2.png"}
        height={"600"}
        width={"600"}
        alt=""
      />
    </div>
  );
}
