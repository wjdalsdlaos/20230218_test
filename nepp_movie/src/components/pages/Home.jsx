import ContentList from "../home/ContentList";

const filters = {
  trending: [
    { id: 1, text: "Movie", active: true, url: "/trending/movie/week" },
    { id: 2, text: "tv", active: false, url: "/trending/tv/week" },
  ],
  popular: [
    { id: 1, text: "tv", acvie: true, url: "/tv/popular" },
    { id: 2, text: "movie", active: false, url: "/movie/popular" },
  ],
};
function Home() {
  return (
    <div>
      <ContentList title="트렌딩" initialState={filters.trending} />
      <ContentList title="인기" initialState={filters.popular} />
    </div>
  );
}

export default Home;
