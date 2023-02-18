import { Link } from "react-router-dom";

function Header() {
  return (
    <Header>
      <nav>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="user">User</Link>
        </li>
      </nav>
    </Header>
  );
}

export default Header;
