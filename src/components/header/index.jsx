import { Link } from "react-router-dom";
import "./index.scss";
import { SearchOutlined } from "@ant-design/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="https://movie-eta-sage.vercel.app/assets/movix-logo-d720c325.svg"
          width={200}
          alt=""
        />
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
          <li>
            <SearchOutlined />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
