import { Route, Routes } from "react-router-dom";
import Home from "./component/router/Home";
import About from "./component/router/About";
import Header from "./component/router/Header";
import PostEdit from "./component/post/PostEdit";
import Post from "./component/post/Post";
import PostList from "./component/post/PostList";

function App() {
  return (
    <>
      <Header />
      {/* Routes와 Route를 통해서 주소에 따라 보여줄 컴포넌트를 나눈다. */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":id" element={<div>짠 역시 그 종족</div>} />
        </Route>
        <Route path="about/*" element={<About />} />
        <Route path="post" element={<Post />}>
          <Route path="" element={<PostList />} />
          <Route path="edit" element={<PostEdit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
