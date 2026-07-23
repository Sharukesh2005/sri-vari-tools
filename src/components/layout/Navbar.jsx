import "../../styles/Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav>

      <div className="logo">

    <img src={logo} alt="Sri Vari Tools Logo" />

    <h2>Sri Vari Tools</h2>

</div>

      <ul>

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#products">Products</a>
        </li>

        <li>
          <a href="#solutions">Solutions</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;