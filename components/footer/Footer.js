import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className="flex flex-col-reverse md:flex md:flex-row justify-center items-center w-full h-50 text-gray-300 gap-10 p-20">
      <div className="text-xl text-gray-400">
        <span className={styles["footer-font"]}>
          &#169; Akshay Srivastava 2023
        </span>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Image
          className="h-8 w-8"
          height={"200"}
          width={"200"}
          alt=""
          src="/github.png"
        />
        <Image
          className="h-8 w-8"
          height={"200"}
          width={"200"}
          alt=""
          src="/instagram.png"
        />
        <Image
          className="h-8 w-8"
          height={"200"}
          width={"200"}
          alt=""
          src="/gmail.png"
        />
      </div>
    </div>
  );
}
