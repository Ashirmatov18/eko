import React from "react";
import Footer from "../../container/Footer/Footer";
import Header from "../../container/Header/Header";
import MainLayout from "../../MainLayout";
import styles from "../../../styles/AboutUs.css";
import AboutInfo from "./AboutInfo";

export default function AboutUs() {
  return (
    <MainLayout>
      <div className="background_image">
        <Header />
        <h1>О нас</h1>
      </div>
      <AboutInfo />
      <Footer />
    </MainLayout>
  );
}
