import { gsap } from "gsap";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import square from "./assets/1x1.jpg";
import rectangle from "./assets/3x4.jpg";
import rectangle2 from "./assets/3x2.jpg";
import sample from "./assets/sample.mp3";
import "./App.css";
import "./assets/cursor.css";
import "./assets/image-container.css";
import { ImageContainer, Gallery, Cursor } from "./components";

function App() {
  // Song Logic
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
      // TODO: Remove this
      // returnUpdatedBtnText(upcomingSong.nextElementSibling);
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

  // Animations

  const [btnText, updateBtnText] = useState("play");
  const galleryRef = useRef(null);

  // Update btn text when songMap updates
  useEffect(() => {
    btnText === "play" ? updateBtnText("pause") : updateBtnText("play");
  }, [songMap]);

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
    gsap.set(".outer-cursor", { xPercent: -50, yPercent: -50 });
    gsap.set(".inner-cursor", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".outer-cursor", "x", {
      duration: 0.025,
      ease: "sine.in",
    });
    let yTo = gsap.quickTo(".outer-cursor", "y", {
      duration: 0.025,
      ease: "sine.in",
    });
    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });

    let xToInner = gsap.quickTo(".inner-cursor", "x", {
      duration: 0.001,
      ease: "sine.in",
    });
    let yToInner = gsap.quickTo(".inner-cursor", "y", {
      duration: 0.001,
      ease: "sine.in",
    });
    window.addEventListener("mousemove", (e) => {
      xToInner(e.clientX);
      yToInner(e.clientY);
    });
  }

  function returnUpdatedBtnText(target) {
    if (target.dataset.isactive === "true" && btnText != "pause") {
      console.log("pause");
      updateBtnText("pause");
    }

    if (target.dataset.isactive === "false" && btnText != "play") {
      console.log("play");
      updateBtnText("play");
    }
  }

  function handleMouseEnter(event) {
    returnUpdatedBtnText(event.target);

    gsap.to(".inner-cursor__text", {
      fontSize: 18,
      duration: 0.175,
      ease: "sine.in",
    });

    gsap.to(".inner-cursor__background", {
      width: 80,
      height: 80,
      duration: 0.175,
      ease: "sine.in",
    });

    gsap.to(".outer-cursor", {
      opacity: 0,
      duration: 0.175,
      ease: "sine.in",
    });
  }

  function handleMouseLeave() {
    gsap.to(".inner-cursor__text", {
      fontSize: 0,
      duration: 0.175,
      ease: "sine.in",
    });

    gsap.to(".inner-cursor__background", {
      width: 6,
      height: 6,
      duration: 0.175,
      ease: "sine.in",
    });

    gsap.to(".outer-cursor", {
      opacity: 1,
      duration: 0.175,
      ease: "sine.in",
    });
  }

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
          onEnter={handleMouseEnter}
          onLeave={handleMouseLeave}
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
          onEnter={handleMouseEnter}
          onLeave={handleMouseLeave}
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
          onEnter={handleMouseEnter}
          onLeave={handleMouseLeave}
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
          onEnter={handleMouseEnter}
          onLeave={handleMouseLeave}
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
          onEnter={handleMouseEnter}
          onLeave={handleMouseLeave}
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
          onEnter={handleMouseEnter}
          onLeave={handleMouseLeave}
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
          onEnter={handleMouseEnter}
          onLeave={handleMouseLeave}
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
          onEnter={handleMouseEnter}
          onLeave={handleMouseLeave}
        />
      </Gallery>

      <Cursor btnText={btnText}></Cursor>
    </>
  );
}

export default App;
