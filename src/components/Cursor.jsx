export function Cursor(props) {
  return (
    <>
      <div className="outer-cursor"></div>
      <div className="inner-cursor">
        <div className="inner-cursor__container">
          <div className="inner-cursor__background"></div>
          <p className="inner-cursor__text">{props.btnText}</p>
        </div>
      </div>
    </>
  );
}
