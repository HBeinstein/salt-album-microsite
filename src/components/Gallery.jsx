import { ImageContainer } from "./ImageContainer";

export function Gallery({ children }, props) {
  return (
    <div className="gallery" ref={props.galleryRef}>
      {children}
    </div>
  );
}
