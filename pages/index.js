import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";
import Work from "../components/Work";
import ContactMe from "../components/contact/ContactMe";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="bg-indigo-800 max-h-max m-0">
      <Navbar />
      <Hero />
      <Work />
      <ContactMe />
      <Footer />
    </div>
  );
}
