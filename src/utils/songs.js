import square from "../assets/1x1.jpg";
import rectangle from "../assets/3x4.jpg";
import rectangle2 from "../assets/3x2.jpg";
import coolCoolCool from "../assets/cool-cool-cool.mp3";
import apocalypse from "../assets/apocalypse.mp3";
import howSweetLoveIs from "../assets/how-sweet-love-is.mp3";
import plumSeason from "../assets/plum-season.mp3";
import takeHoldOfTheLight from "../assets/take-hold-of-the-light.mp3";
import tooSoon from "../assets/too-soon.mp3";
import vampira from "../assets/vampira.mp3";
import youngBlood from "../assets/young-blood.mp3";

export const songs = [
  {
    name: "Cool Cool Cool",
    imageSrc: rectangle,
    imageAlt: "Click to play Cool Cool Cool",
    imageAspectRatio: "3x4",
    audioSrc: coolCoolCool,
    animationSpeed: "fast",
    titlePosition: "bottom",
  },
  {
    name: "Apocalypse",
    imageSrc: rectangle2,
    imageAlt: "Click to play Apocalypse",
    imageAspectRatio: "3x2",
    audioSrc: apocalypse,
    animationSpeed: "slow",
    titlePosition: "top",
  },
  {
    name: "How Sweet Love Is",
    imageSrc: rectangle,
    imageAlt: "Click to play How Sweet Love Is",
    imageAspectRatio: "3x4",
    audioSrc: howSweetLoveIs,
    animationSpeed: "medium",
    titlePosition: "bottom",
  },
  {
    name: "Plum Season",
    imageSrc: rectangle2,
    imageAlt: "Click to play Plum Season",
    imageAspectRatio: "3x2",
    audioSrc: plumSeason,
    animationSpeed: "fast",
    titlePosition: "bottom",
  },
  {
    name: "Take Hold Of The Light",
    imageSrc: square,
    imageAlt: "Click to play Take Hold Of The Light",
    imageAspectRatio: "1x1",
    audioSrc: takeHoldOfTheLight,
    animationSpeed: "medium",
    titlePosition: "bottom",
  },
  {
    name: "Too Soon",
    imageSrc: rectangle2,
    imageAlt: "Click to play Too Soon",
    imageAspectRatio: "3x2",
    audioSrc: tooSoon,
    animationSpeed: "slow",
    titlePosition: "bottom",
  },
  {
    name: "Vampira",
    imageSrc: rectangle,
    imageAlt: "Click to play Vampira",
    imageAspectRatio: "3x4",
    audioSrc: vampira,
    animationSpeed: "medium",
    titlePosition: "top",
  },
  {
    name: "Young Blood",
    imageSrc: rectangle,
    imageAlt: "Click to play Young Blood",
    imageAspectRatio: "3x4",
    audioSrc: youngBlood,
    animationSpeed: "fast",
    titlePosition: "bottom",
  },
];
