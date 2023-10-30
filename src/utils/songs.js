// isActive: songMap.songs.find((s) => s.name === "Cool Cool Cool").isActive,
import square from "../assets/1x1.jpg";
import rectangle from "../assets/3x4.jpg";
import rectangle2 from "../assets/3x2.jpg";
import sample from "../assets/sample.mp3";

export const songs = [
  {
    name: "Cool Cool Cool",
    imageSrc: rectangle,
    imageAlt: "Click to play Cool Cool Cool",
    imageAspectRatio: "3x4",
    audioSrc: sample,
  },
  {
    name: "Apocalypse",
    imageSrc: rectangle2,
    imageAlt: "Click to play Apocalypse",
    imageAspectRatio: "3x2",
    audioSrc: sample,
  },
  {
    name: "How Sweet Love Is",
    imageSrc: rectangle,
    imageAlt: "Click to play How Sweet Love Is",
    imageAspectRatio: "3x4",
    audioSrc: sample,
  },
  {
    name: "Plum Season",
    imageSrc: rectangle2,
    imageAlt: "Click to play Plum Season",
    imageAspectRatio: "3x2",
    audioSrc: sample,
  },
  {
    name: "Take Hold Of The Light",
    imageSrc: square,
    imageAlt: "Click to play Take Hold Of The Light",
    imageAspectRatio: "1x1",
    audioSrc: sample,
  },
  {
    name: "Too Soon",
    imageSrc: rectangle2,
    imageAlt: "Click to play Too Soon",
    imageAspectRatio: "3x2",
    audioSrc: sample,
  },
  {
    name: "Vampira",
    imageSrc: rectangle,
    imageAlt: "Click to play Vampira",
    imageAspectRatio: "3x4",
    audioSrc: sample,
  },
  {
    name: "Young Blood",
    imageSrc: rectangle,
    imageAlt: "Click to play Young Blood",
    imageAspectRatio: "3x4",
    audioSrc: sample,
  },
];
