import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { tmdbAxios } from "../../api/tmdb";
import ContentItem from "./ContentItem";

function ContentList({ title, initialState }) {
  //filter값이 바뀔 때마다 get요청 다시 => active가 true인 filter의 url 사용
  const [filters, setFilter] = useState(initialState);
  const [Items, setItem] = useState([]);

  const handleToggle = (id) => {
    setFilter(
      filters.map((filter) =>
        //클릭한 대상은 무조건 active=true, 나머지는 false
        filter.id === id
          ? { ...filter, active: true }
          : { ...filter, active: false }
      )
    );
  };

  useEffect(() => {
    const { url } = filters.find((filter) => filter.active);
    fetchData(url);
  }, [filters]);

  const fetchData = async (url) => {
    const {
      data: { results },
    } = await tmdbAxios.get(url);
    //const results = res.data.results;
    //const { results } = res.data;
    setItem(results);
  };

  return (
    <Container>
      <ContentHeader>
        <h3>{title}</h3>
        <FilterList>
          {filters.map((filter) => (
            <FilterItem
              key={filter.id}
              active={filter.active}
              onClick={() => handleToggle(filter.id)}
            >
              {filter.text}
            </FilterItem>
          ))}
        </FilterList>
      </ContentHeader>
      <ContentWrapper>
        {Items.map((item) => (
          <ContentItem key={item.id} item={item} />
        ))}
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 0;
`;

const ContentHeader = styled.div`
  display: flex;
`;

const FilterList = styled.ul`
  display: flex;
  border: 1px solid black;
  margin-left: 20px;
`;

const FilterItem = styled.li`
  user-select: none;
  padding: 0 5px;
  ${({ active }) =>
    active &&
    css`
      background-color: black;
      color: white;
    `}
`;

const ContentWrapper = styled.ul`
  display: flex;
  overflow-x: auto;
`;
export default ContentList;
