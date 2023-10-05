import { gsap } from "gsap";
import { useState } from "react";
import viteLogo from "/vite.svg";
import square from "./assets/1x1.jpg";
import rectangle from "./assets/3x4.jpg";
import rectangle2 from "./assets/3x2.jpg";
import sample from "./assets/sample.mp3";
import "./App.css";
import { ImageContainer, Gallery } from "./components";

function App() {
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

  const handleClick = (overrides, upcomingSong) => {
    const prevSong = document.getElementById(`${songMap.currentSong}`);
    if (prevSong && prevSong.id !== upcomingSong.id) {
      prevSong.pause();
    }

    if (!upcomingSong.currentTime || upcomingSong.paused) {
      upcomingSong.play();
      updateSongMap({ ...songMap, ...overrides });
    } else {
      upcomingSong.pause();
    }
  };

  return (
    <>
      <Gallery>
        <ImageContainer
          src={rectangle}
          className={"gallery__image gallery__image--3x4"}
          height={100}
          alt={"square image"}
          loading={"eager"}
          dataSongName={songMap.songs[0].name}
          dataSongAudio={sample}
          handleClick={handleClick}
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
        />
      </Gallery>
    </>
  );
}

export default App;
