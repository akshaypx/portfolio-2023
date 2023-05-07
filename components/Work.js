import Image from "next/image";
import Button from "./button/Button";
import Link from "next/link";
import styles from "./Work.module.css";

export default function Work() {
  return (
    <div className="flex flex-col justify-center w-full items-center p-20 bg-gray-800">
      <div
        className={`${styles["work-font"]} text-4xl md:text-8xl text-white my-28 md:mb-20`}
      >
        My Work
      </div>
      <div className="md:w-100 text-white bg-gray-700 flex-col md:flex md:flex-row justify-center items-center gap-4 md:m-10 p-6 border-2 border-gray-600 hover:border-white transition ease-in-out rounded-xl">
        {/* Image */}
        <div className="md:h-80 md:w-96 bg-white m-4 rounded-xl overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={"/redux-movie2.png"}
            height={"600"}
            width={"900"}
            alt=""
          />
        </div>
        {/* content */}
        <div className="md:w-48 text-justify m-4">
          {/* header */}
          <div className="text-2xl flex justify-between items-center py-4">
            <b className="mr-14">Re IMDB</b>
            <Link
              href="https://redux-movie-app-chi.vercel.app/"
              target="_blank"
            >
              <Button variant="secondary-sm">Visit</Button>
            </Link>
          </div>
          {/* body */}
          <div className="text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
      <div className="md:w-100 text-white bg-gray-700 flex-col md:flex md:flex-row justify-center items-center gap-4 m-10 p-6 border-2 border-gray-600 hover:border-white transition ease-in-out rounded-xl">
        <div className="md:h-80 md:w-96 bg-white m-4 rounded-xl overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={"/weather-app.png"}
            height={"600"}
            width={"900"}
            alt=""
          />
        </div>
        <div className="md:w-48 text-justify m-4">
          <div className="text-2xl flex justify-between items-center py-4">
            <b className="mr-5">Weather App</b>
            <Link
              href="https://weather-app-react-e2h5.vercel.app/"
              target="_blank"
            >
              <Button variant="secondary-sm">Visit</Button>
            </Link>
          </div>
          <div className="text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
}
