export function ImageContainer(props) {
  return (
    <img
      src={props.src}
      className={props.className}
      width={`${props.width}%`}
      height="auto"
      alt={props.alt}
      loading={props.loading}
    ></img>
  );
}
