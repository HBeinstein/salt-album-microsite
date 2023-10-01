export function ImageContainer(props) {
  return (
    <img
      src={props.src}
      className={props.className}
      height={`${props.width}%`}
      width="auto"
      alt={props.alt}
      loading={props.loading}
    ></img>
  );
}
