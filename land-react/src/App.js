import "./App.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const App = () => {
  // function toggleBtn() {
  //   var element = document.getElementById("primary-navigation");
  //   element.classList.toggle("primary-navigation-transform");
  // }

  const [isActive, setActive] = useState("false");

  const handleToggle = (e) => {
    e.preventDefault();
    setActive(!isActive);
    return;
  };

  return (
    <div>
      <header className="primary-header">
        <div>
          <p className="logo">LOGO</p>
        </div>
        <button className="mobile-nav-toggle" onClick={handleToggle}>
          <FaBars />
        </button>
        <nav>
          <ul
            className={
              isActive
                ? "primary-navigation flex"
                : "primary-navigation-transform flex"
            }
          >
            <li className="active">
              <a href="">
                <span aria-hidden="true">00</span>Home
              </a>
            </li>
            <li>
              <a href="">
                <span aria-hidden="true">01</span>About
              </a>
            </li>
            <li>
              <a href="">
                <span aria-hidden="true">02</span>Products
              </a>
            </li>
            <li>
              <a href="">
                <span aria-hidden="true">03</span>Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="home">
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id sit
            ipsam hic, dolores, voluptatem et ad aliquam esse architecto
            voluptates nulla quisquam corporis deserunt ea animi in repudiandae
            quod?
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
