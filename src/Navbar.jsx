import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/">Home</Link>
      <Link to="/green">Green</Link>
    </div>
  );
};

export default Navbar;
