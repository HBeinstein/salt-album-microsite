import { gsap } from "gsap";
import { useState, useLayoutEffect, useRef } from "react";
import viteLogo from "/vite.svg";
import square from "./assets/1x1.jpg";
import rectangle from "./assets/3x4.jpg";
import rectangle2 from "./assets/3x2.jpg";
import sample from "./assets/sample.mp3";
import "./App.css";
import "./assets/cursor.css";
import "./assets/image-container.css";
import { ImageContainer, Gallery, Cursor } from "./components";

function App() {
  const galleryRef = useRef(null);

  let ctx = gsap.context(() => {
    useLayoutEffect(() => {
      fadeInImages();
      handleStickyCursor();

      return () => ctx.revert();
    }, []);
  }, galleryRef);

  function fadeInImages() {
    const staggerParams = {
      each: 0.1,
      from: "edges",
      grid: "auto",
      ease: "sine.in",
    };

    gsap.fromTo(
      ".gallery__image-container",
      {
        scale: 0.97,
      },
      {
        scale: 1,
        duration: 0.75,
        ease: "sine.in",
        stagger: staggerParams,
      },
    );

    gsap.fromTo(
      ".gallery__image-container",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "sine.in",
        stagger: staggerParams,
      },
    );
  }

  function handleStickyCursor() {
    gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".cursor", "x", {
      duration: 0.05,
      ease: "sine.in",
    });
    let yTo = gsap.quickTo(".cursor", "y", {
      duration: 0.05,
      ease: "sine.in",
    });
    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }

  const initialSongMap = {
    currentSong: "",
    songs: [
      { name: "Cool Cool Cool", isActive: false },
      { name: "Apocalypse", isActive: false },
      { name: "How Sweet Love Is", isActive: false },
      { name: "Plum Season", isActive: false },
      { name: "Take Hold Of The Light", isActive: false },
      { name: "Too Soon", isActive: false },
      { name: "Vampira", isActive: false },
      { name: "Young Blood", isActive: false },
    ],
  };

  const [songMap, updateSongMap] = useState(initialSongMap);

  const handleClick = (songName, upcomingSong) => {
    const prevSong = document.getElementById(`${songMap.currentSong}`);
    if (prevSong && prevSong.id !== upcomingSong.id) {
      prevSong.pause();
    }

    if (!upcomingSong.currentTime || upcomingSong.paused) {
      upcomingSong.play();
      updateSongMap({
        ...songMap,
        ...{ currentSong: songName },
        ...{
          songs: songMap.songs.map((s) =>
            s.name === songName
              ? { ...s, name: songName, isActive: true }
              : { ...s, name: s.name, isActive: false },
          ),
        },
      });
    } else {
      updateSongMap({
        ...songMap,
        ...{
          songs: songMap.songs.map((s) =>
            s.isActive === true ? { ...s, name: s.name, isActive: false } : s,
          ),
        },
      });
      upcomingSong.pause();
    }
  };

  return (
    <>
      <Gallery galleryRef={galleryRef}>
        <ImageContainer
          src={rectangle}
          className={"gallery__image gallery__image--3x4"}
          height={100}
          alt={"square image"}
          loading={"eager"}
          dataSongName={songMap.songs[0].name}
          dataSongAudio={sample}
          handleClick={handleClick}
          isActive={songMap.songs[0].isActive}
        />

        <ImageContainer
          src={rectangle2}
          className={"gallery__image gallery__image--3x2"}
          height={100}
          alt={"square image"}
          loading={"eager"}
          dataSongName={songMap.songs[1].name}
          dataSongAudio={sample}
          handleClick={handleClick}
          isActive={songMap.songs[1].isActive}
        />

        <ImageContainer
          src={rectangle}
          className={"gallery__image gallery__image--3x4"}
          height={300}
          alt={"square image"}
          loading={"eager"}
          dataSongName={songMap.songs[2].name}
          dataSongAudio={sample}
          handleClick={handleClick}
          isActive={songMap.songs[2].isActive}
        />

        <ImageContainer
          src={rectangle2}
          className={"gallery__image gallery__image--3x2"}
          height={300}
          alt={"square image"}
          loading={"eager"}
          dataSongName={songMap.songs[3].name}
          dataSongAudio={sample}
          handleClick={handleClick}
          isActive={songMap.songs[3].isActive}
        />

        <ImageContainer
          src={square}
          className={"gallery__image gallery__image--1x1"}
          height={300}
          alt={"square image"}
          loading={"eager"}
          dataSongName={songMap.songs[4].name}
          dataSongAudio={sample}
          handleClick={handleClick}
          isActive={songMap.songs[4].isActive}
        />

        <ImageContainer
          src={rectangle2}
          className={"gallery__image gallery__image--3x2"}
          height={300}
          alt={"square image"}
          loading={"eager"}
          dataSongName={songMap.songs[5].name}
          dataSongAudio={sample}
          handleClick={handleClick}
          isActive={songMap.songs[5].isActive}
        />

        <ImageContainer
          src={rectangle}
          className={"gallery__image gallery__image--3x4"}
          height={300}
          alt={"square image"}
          loading={"eager"}
          dataSongName={songMap.songs[6].name}
          dataSongAudio={sample}
          handleClick={handleClick}
          isActive={songMap.songs[6].isActive}
        />

        <ImageContainer
          src={rectangle}
          className={"gallery__image gallery__image--3x4"}
          height={300}
          alt={"square image"}
          loading={"eager"}
          dataSongName={songMap.songs[7].name}
          dataSongAudio={sample}
          handleClick={handleClick}
          isActive={songMap.songs[7].isActive}
        />
      </Gallery>

      <Cursor></Cursor>
    </>
  );
}

export default App;
