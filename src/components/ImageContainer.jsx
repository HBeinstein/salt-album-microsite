export function ImageContainer(props) {
  const formattedSong = props.dataSongName.toLowerCase().replace(/ /gi, "-");
  const formattedSongId = `${formattedSong}-container`;
  return (
    <div id={formattedSongId} className="gallery__image-container">
      <button
        type="button"
        className="gallery__play-btn"
        onClick={() => {
          const container = document.getElementById(formattedSongId);
          const songAudio = container.querySelector("audio");
          props.handleClick({ currentSong: props.dataSongName }, songAudio);
        }}
      >
        play
      </button>
      <audio id={props.dataSongName} src={props.dataSongAudio}></audio>
      <img
        src={props.src}
        className={props.className}
        height={`${props.width}%`}
        width="auto"
        alt={props.alt}
        data-song={props.dataSongName}
        loading={props.loading}
      ></img>
    </div>
  );
}