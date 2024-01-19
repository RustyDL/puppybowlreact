import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar">
      <Link to="/">All Puppies</Link>
      <Link to="/newplayerform">New Player Form</Link>
    </div>
  );
}