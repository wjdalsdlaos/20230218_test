import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Outlet />
      <h1>Home</h1>
    </div>
  );
}

export default Home;
