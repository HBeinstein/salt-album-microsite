import { gsap } from "gsap";
import { useState } from "react";
import viteLogo from "/vite.svg";
import square from "./assets/1x1.jpg";
import rectangle from "./assets/3x4.jpg";
import rectangle2 from "./assets/3x2.jpg";
import "./App.css";
import { ImageContainer, Gallery } from "./components";

function App() {
  return (
    <>
      <Gallery>
        <ImageContainer
          src={rectangle}
          className={"gallery__image gallery__image--3x4"}
          width={100}
          alt={"square image"}
          loading={"eager"}
        />

        <ImageContainer
          src={rectangle2}
          className={"gallery__image gallery__image--3x2"}
          width={100}
          alt={"square image"}
          loading={"eager"}
        />

        {/* <ImageContainer
          src={square}
          className={"gallery__image gallery__image--1x1"}
          width={300}
          alt={"square image"}
          loading={"eager"}
        />

        <ImageContainer
          src={rectangle2}
          className={"gallery__image gallery__image--3x2"}
          width={300}
          alt={"square image"}
          loading={"eager"}
        />

        <ImageContainer
          src={rectangle}
          className={"gallery__image gallery__image--3x4"}
          width={300}
          alt={"square image"}
          loading={"eager"}
        /> */}
      </Gallery>
    </>
  );
}

export default App;
