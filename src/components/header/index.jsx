import { Link } from "react-router-dom";
import "./index.scss";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="header">
      <div className={`header__search ${showSearch === true ? "active" : ""}`}>
        <input type="text" placeholder="Search movie..." />
        <CloseOutlined onClick={() => setShowSearch(false)} />
      </div>
      <div className="header__logo">
        <Link to={"/"}>
          <img
            src="https://movie-eta-sage.vercel.app/assets/movix-logo-d720c325.svg"
            width={200}
            alt=""
          />
        </Link>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/home"}>Movies</Link>
          </li>
          <li>
            <Link to={"/movie-management"}>Movie management</Link>
          </li>
          <li onClick={() => setShowSearch(true)}>
            <SearchOutlined />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
