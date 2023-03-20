import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div>
      <h2>NoMatch</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
