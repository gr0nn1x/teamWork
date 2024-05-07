import { Link } from "react-router-dom";

export default function MainPage() {
  return (<>
    <Link to="/welcome">
      <p>jedna</p>
    </Link>
    <Link to="/products">
      <p>Jit do produktů</p>
    </Link>
    </>
  );
}
