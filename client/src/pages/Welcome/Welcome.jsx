import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <Link to="/">
        <p>dve</p>
      </Link>
      <Link to="/aboutus">
        <p>About Us</p>
      </Link>
    </>
  );
}
