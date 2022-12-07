import React from "react";
import Header from "../../container/Header/Header";
import styles from "../../../styles/MainPage.css";
import Creation from "./Creation";
import Mission from "./Mission";
import Footer from "../../container/Footer/Footer";
import MainLayout from "../../MainLayout";

export default function MainPage() {
  return (
    <MainLayout>
      <div className="background-image">
        <Header />
      </div>
      <Creation />
      <Mission />
      <div className="footer_main_page">
        <Footer />
      </div>
    </MainLayout>
  );
}
