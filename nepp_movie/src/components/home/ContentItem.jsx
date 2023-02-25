import { Link } from "react-router-dom";
import styled from "styled-components";

function ContentItem({ item }) {
  console.log(item);
  const { title, release_date, poster_path, name, first_air_date, id } = item;

  const poster_url = "https://image.tmdb.org/t/p/w500/" + poster_path;

  const type = title ? "movie" : "tv";

  return (
    <Container>
      <Link to={`/${type}/${id}`}>
        <ImageBox>
          <img src={poster_url} alt="" />
        </ImageBox>
        <Title>{title || name}</Title>
        <ReleaseData>{release_date || first_air_date}</ReleaseData>
      </Link>
    </Container>
  );
}

const Container = styled.li`
  img {
    width: 200px;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 200px;
  overflow: hidden;
  img {
    height: 100%;
  }
`;

const Title = styled.p`
  font-weight: 700;
`;
const ReleaseData = styled.span`
  font-size: 0.8rem;
  color: #bbb;
`;

export default ContentItem;
