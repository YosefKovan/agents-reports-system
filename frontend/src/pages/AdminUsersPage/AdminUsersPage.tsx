import useFetch from "../../hooks/useFetch";
import { type User } from "../../interfaces/user.interfaces";
import UserCard from "../../components/UserCard/UserCard";
import { Link } from "react-router";
import "../../css/link.buttons.css";
import "./AdminUsersPage.css";
import "../../index.css";
import AlertComponent from "../../components/AlertComponent/AlertComponent";
import { ClipLoader } from "react-spinners";
import "../../css/loader.css";


const URL: string = "http://localhost:3000/admin/users";

const AdminUsersPage = () => {
  const { loading, apiData, error } = useFetch<{ users: User[] }>(URL);
   
  if(loading){
        return(
            <main className="loading-section">{loading && <ClipLoader loading={loading} size={60}/>}</main>
        )
  }

  return (
    <>
      <main className="admin-user-page container">
        {error && <AlertComponent code={error?.code} message={error?.message} className="fail"/>}
        {!loading && !error && apiData && (
          <>
            <header className="admin-users-page-header">
              <Link to="/admin/dashboard" className="blue-btn" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-6 0 24 24"><rect x="-6" width="24" height="24" fill="none"/><path fill="#fdfdfd" fill-rule="evenodd" d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z"/></svg>
                back
              </Link>
              <Link to="/admin/add-user" className="btn-secondary">Add User</Link>
            </header>
            <section className="users-section">
              {apiData.users.map((user: User) => (
                <UserCard {...user} />
              ))}
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default AdminUsersPage;
