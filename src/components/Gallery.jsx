import { ImageContainer } from "./ImageContainer";

export function Gallery({ children }, props) {
  return (
    <div className="gallery section" ref={(props.galleryRef, props.scrollRef)}>
      {children}
    </div>
  );
}
