import "./style.css";
import headshot from "./15headshot1.jpg";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header">Daniel Harding - Web Developer</h1>
      <img className="headshot" src={headshot}></img>
    </div>
  );
};

export default Header;
