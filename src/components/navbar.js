import logo from "../assets/images/logo.jpg";
import "../App.css";

function Navbar() {
  return (
    <div>
      <nav>
        <div class="logo">
          <img src={logo} />
        </div>

        <ul id="nav-list">
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button class="hamburger" id="hamburger">
          <i class="fas fa-bars"></i>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
