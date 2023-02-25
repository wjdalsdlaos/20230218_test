import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./components/common/Header";
import MovieDetail from "./components/movie/MovieDetail";
import MovieList from "./components/movie/MovieList";
import Home from "./components/pages/Home";
import Movie from "./components/pages/Movie";
import People from "./components/pages/People";
import Tv from "./components/pages/Tv";

function App() {
  return (
    <div>
      <MainSection>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie" element={<Movie />}>
            <Route path="" element={<MovieList />} />
            <Route path=":id" element={<MovieDetail />} />
          </Route>

          <Route path="/tv" element={<Tv />} />
          <Route path="people" element={<People />} />
        </Routes>
      </MainSection>
    </div>
  );
}

const MainSection = styled.div`
  max-width: 900;
  margin: 0 auto;
`;

export default App;
