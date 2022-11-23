import React from "react";
import Header from "../../container/Header/Header";
import styles from "../../../styles/MainPage.css";
import Creation from "./Creation";
import Mission from "./Mission";

export default function MainPage() {
  return (
    <>
      <div className="background-image">
        <Header />
      </div>
      <Creation />
      <Mission />
    </>
  );
}
