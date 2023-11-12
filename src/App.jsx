import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import "./App.css";
import "./assets/cursor.css";
import "./assets/image-container.css";
import { ImageContainer, Cursor } from "./components";
import { Animation, songs } from "./utils";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // initialize Animation
  const animationUtils = Animation.init(gsap);

  // Initital song map state
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

  // Set state
  const [songMap, updateSongMap] = useState(initialSongMap);
  const [btnText, updateBtnText] = useState("play");

  // Set refs
  const app = useRef(null);
  const scrollContainer = useRef(null);
  const galleryRef = useRef(null);
  // Create Image State Refs for each image
  const imgState = useRef(null);
  const imgState2 = useRef(null);
  const imgState3 = useRef(null);
  const imgState4 = useRef(null);
  const imgState5 = useRef(null);
  const imgState6 = useRef(null);
  const imgState7 = useRef(null);
  const imgState8 = useRef(null);
  // Store Image State Refs in an array
  let imgStateArr = [
    imgState,
    imgState2,
    imgState3,
    imgState4,
    imgState5,
    imgState6,
    imgState7,
    imgState8,
  ];

  // Init horizontal scroll
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animationUtils.handleHorizontalScroll(scrollContainer);
    }, scrollContainer);
    return () => ctx.revert();
  }, []);

  // Init image hover effects
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animationUtils.initImageEffects(galleryRef, imgStateArr);
    }, galleryRef.current);
    return () => ctx.revert();
  }, []);

  // Init sticky cursor
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animationUtils.handleStickyCursor();
    }, app);
    return () => ctx.revert();
  }, []);

  // Toggle play button text when songMap updates
  useEffect(() => {
    btnText === "play" ? updateBtnText("pause") : updateBtnText("play");
  }, [songMap]);

  // Handle button animation and song play on click
  const handleClick = (songName, upcomingSong) => {
    const prevSong = document.getElementById(`${songMap.currentSong}`);
    if (prevSong && prevSong.id !== upcomingSong.id) {
      prevSong.pause();
    }

    if (!upcomingSong.currentTime || upcomingSong.paused) {
      animationUtils.handleButtonTransition();
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
      animationUtils.handleButtonTransition();
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
    <div className="app" ref={app}>
      <div className="scrollContainer" ref={scrollContainer}>
        <div className="section test-component"></div>
        <div className="section test-component2"></div>
        <div className="gallery section" ref={galleryRef}>
          {songs.map((song, index) => {
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
                onEnter={(event) =>
                  animationUtils.handleImageEnter(
                    event,
                    index,
                    imgStateArr,
                    btnText,
                    updateBtnText,
                  )
                }
                onLeave={(event) =>
                  animationUtils.handleImageLeave(event, index, imgStateArr)
                }
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
