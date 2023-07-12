import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <div className="header-div">
      <Link
        className={`link ${location.pathname.includes("form") ? "" : "active"}`}
        to={"/"}>
        Home
      </Link>
      <Link
        className={`link ${location.pathname.includes("form") ? "active" : ""}`}
        to={"/form"}>
        Add employee
      </Link>
    </div>
  );
}
