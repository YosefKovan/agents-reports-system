import useFetch from "../../hooks/useFetch";
import { type User } from "../../interfaces/user.interfaces";
import UserCard from "../../components/UserCard/UserCard";
import { Link } from "react-router";

const URL: string = "http://localhost:3000/admin/users";

const AdminUsersPage = () => {
  const { loading, apiData, error } = useFetch<{ users: User[] }>(URL);

  console.log(apiData);
  console.log(error);

  return (
    <main>
      {loading && <section>Loading...</section>}
      {error && <div>{error.message}</div>}
      {!loading && !error && apiData && (
        <>
          <header>
            <Link to="/">back</Link>
            <Link to="/add-user">Add User</Link>
          </header>
          <section className="users">
            {apiData.users.map((user: User) => (
              <UserCard {...user} />
            ))}
          </section>
        </>
      )}
    </main>
  );
};

export default AdminUsersPage;
