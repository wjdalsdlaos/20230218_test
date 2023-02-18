import { Link, useOutletContext } from "react-router-dom";

function UserList() {
  const { users } = useOutletContext();
  console.log(users);
  const { data, isLoading } = users;
  if (isLoading) return;
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={"/user/" + item.id}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
