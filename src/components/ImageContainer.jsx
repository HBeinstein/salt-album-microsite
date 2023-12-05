export function ImageContainer(props) {
  const formattedSong = props.dataSongName.toLowerCase().replace(/ /gi, "-");
  const formattedSongId = `${formattedSong}-container`;
  let btnText;
  if (props.isActive) {
    btnText = "pause";
  } else {
    btnText = "play";
  }

  return (
    <div
      id={formattedSongId}
      className={`gallery__image-container ${props.animationSpeed}`}
      onMouseEnter={props.onEnter}
      onMouseLeave={props.onLeave}
    >
      {/* <button
        type="button"
        className="gallery__play-btn"
        onClick={() => {
          const container = document.getElementById(formattedSongId);
          const songAudio = container.querySelector("audio");
          props.handleClick(props.dataSongName, songAudio);
        }}
      >
        {btnText}
      </button> */}
      <audio id={props.dataSongName} src={props.dataSongAudio}></audio>
      <figure className="gallery__figure">
        {props.titlePosition === "top" && (
          <figcaption className="gallery__figcaption">
            {props.dataSongName}
          </figcaption>
        )}
        <img
          src={props.src}
          className={props.className}
          width="auto"
          alt={props.alt}
          data-song={props.dataSongName}
          loading={props.loading}
          onClick={() => {
            const container = document.getElementById(formattedSongId);
            const songAudio = container.querySelector("audio");
            props.handleClick(props.dataSongName, songAudio);
          }}
          data-isactive={props.isActive}
        ></img>
        {props.titlePosition === "bottom" && (
          <figcaption className="gallery__figcaption">
            {props.dataSongName}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
