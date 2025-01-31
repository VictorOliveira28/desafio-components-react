import CardComment from "../CardComment";
import "./styles.css";

export default function Comments() {
  return (
    <>
      <div className="ds-comments-section">
        <h3>Oque estão dizendo</h3>
        <CardComment />
        <CardComment />
        <CardComment />
        <CardComment />
        <CardComment />
        <CardComment />
        <CardComment />
      </div>
    </>
  );
}
