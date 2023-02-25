import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const navList = [
  //{ id: 1, text: "", url: "/" },
  { id: 1, text: "Movie", url: "/movie" },
  { id: 2, text: "TV", url: "/tv" },
  { id: 3, text: "People", url: "/people" },
];

function Header() {
  const { pathname } = useLocation();

  return (
    <Conteiner>
      <Wrapper>
        <Logo>
          <Link to="/">NeppMovie</Link>
        </Logo>
        <Gnb>
          <ul>
            {navList.map((nav) => (
              <li
                key={nav.id}
                style={{ fontWeight: pathname === nav.url && 700 }}
              >
                <Link to={nav.url}>{nav.text}</Link>
              </li>
            ))}
          </ul>
        </Gnb>
        <form>
          <input type="text" />
          <button>검색</button>
        </form>
      </Wrapper>
    </Conteiner>
  );
}

const Conteiner = styled.header`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid;
`;

const Logo = styled.h1``;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  max-width: 900;
  flex: 1;
  margin: 0 auto;
`;

const Gnb = styled.nav`
  flex: 1;
  ul {
    display: flex;
    flex: 1;
    gap: 20px;
    margin-left: 30px;
  }
`;

export default Header;
