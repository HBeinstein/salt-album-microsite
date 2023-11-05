import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import square from "./assets/1x1.jpg";
import rectangle from "./assets/3x4.jpg";
import rectangle2 from "./assets/3x2.jpg";
import sample from "./assets/sample.mp3";
import "./App.css";
import "./assets/cursor.css";
import "./assets/image-container.css";
import { ImageContainer, Cursor } from "./components";
import { songs } from "./utils/songs";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Set horizontal scroll
  const app = useRef(null);
  const scrollContainer = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let sections = gsap.utils.toArray(".section");

      // Handle overall horizontal scroll
      gsap.to(sections, {
        x: () =>
          -(
            scrollContainer.current.scrollWidth -
            document.documentElement.clientWidth
          ) + "px",
        ease: "sine",
        scrollTrigger: {
          markers: true,
          trigger: scrollContainer.current,
          pin: true,
          scrub: 1,
          end: () =>
            scrollContainer.current.scrollWidth -
            document.documentElement.clientWidth,
        },
      });

      // Handle gallery image load effect on scroll
      const staggerParams = {
        each: 0.1,
        from: "edges",
        grid: "auto",
        ease: "sine.in",
      };

      let timeline = gsap.timeline({
        scrollTrigger: {
          start: "400px",
          trigger: "gallery__image-container",
        },
      });

      timeline
        .from(".gallery__image-container", {
          scale: 0.97,
          duration: 0.75,
          ease: "sine.in",
          stagger: staggerParams,
        })
        .from(".gallery__image-container", {
          opacity: 0,
          duration: 1,
          ease: "sine.in",
          stagger: staggerParams,
        });
    }, scrollContainer);
    return () => ctx.revert();
  }, []);

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
      handleButtonTransition();
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
      handleButtonTransition();
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

  let ctx = gsap.context(() => {
    useLayoutEffect(() => {
      handleStickyCursor();

      return () => ctx.revert();
    }, []);

    // Update btn text when songMap updates
    useEffect(() => {
      btnText === "play" ? updateBtnText("pause") : updateBtnText("play");
    }, [songMap]);
  }, galleryRef);

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

  function handleButtonTransition() {
    const timeline = gsap.timeline();
    timeline
      .to(".inner-cursor__text", {
        opacity: "0",
        duration: 0.001,
        ease: "sine.in",
      })
      .to(".inner-cursor__background", {
        rotationY: "+=180",
        duration: 0.5,
        ease: "sine.in",
      })
      .to(".inner-cursor__text", {
        opacity: "1",
        duration: 0.15,
        ease: "sine.in",
      });
  }

  function handleMouseEnter(event) {
    if (event.target.dataset.isactive === "true" && btnText != "pause") {
      updateBtnText("pause");
    }

    if (event.target.dataset.isactive === "false" && btnText != "play") {
      updateBtnText("play");
    }
    const timeline = gsap.timeline();
    timeline
      .to(".inner-cursor__text", {
        fontSize: 18,
        duration: 0.175,
        ease: "sine.in",
      })
      .to(
        ".inner-cursor__background",
        {
          width: 80,
          height: 80,
          duration: 0.175,
          ease: "sine.in",
        },
        "<",
      )
      .to(
        ".outer-cursor",
        {
          opacity: 0,
          duration: 0.175,
          ease: "sine.in",
        },
        "<",
      );
  }

  function handleMouseLeave() {
    const timeline = gsap.timeline();
    timeline
      .to(".inner-cursor__text", {
        fontSize: 0,
        duration: 0.175,
        ease: "sine.in",
      })
      .to(
        ".inner-cursor__background",
        {
          width: 6,
          height: 6,
          duration: 0.175,
          ease: "sine.in",
        },
        "<",
      )
      .to(
        ".outer-cursor",
        {
          opacity: 1,
          duration: 0.175,
          ease: "sine.in",
        },
        "<",
      );
  }

  return (
    <div className="app" ref={app}>
      <div className="scrollContainer" ref={scrollContainer}>
        <div className="section test-component"></div>
        <div className="section test-component2"></div>
        <div className="gallery section" ref={galleryRef}>
          {songs.map((song) => {
            return (
              <ImageContainer
                key={song.name}
                src={song.imageSrc}
                className={`gallery__image gallery__image--${song.imageAspectRatio}`}
                height={100}
                alt={song.imageAlt}
                loading={"lazy"}
                dataSongName={song.name}
                dataSongAudio={song.audioSrc}
                handleClick={handleClick}
                isActive={
                  songMap.songs.find((s) => s.name === song.name).isActive
                }
                onEnter={handleMouseEnter}
                onLeave={handleMouseLeave}
              ></ImageContainer>
            );
          })}
        </div>
        <Cursor btnText={btnText}></Cursor>
      </div>
    </div>
  );
}

export default App;
