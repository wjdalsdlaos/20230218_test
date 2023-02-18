import { Outlet } from "react-router-dom";
function Main() {
  return (
    <div>
      <Outlet />
      <h1>Main</h1>
    </div>
  );
}

export default Main;
