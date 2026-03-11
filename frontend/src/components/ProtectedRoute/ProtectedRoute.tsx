import { jwtDecode, type JwtPayload } from "jwt-decode";
import { type FC } from "react";
import { Outlet, Navigate } from "react-router";
import Navbar from "../Navbar/Navbar";
import { type LinkInterface } from "../../interfaces/link.interfaces";

interface Payload extends JwtPayload {
  role: string;
}

const ProtectedRoute: FC<{ role: string, links : LinkInterface[] }> = ({ role, links }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  const decoded = jwtDecode<Payload>(token);

  if (decoded.role.toUpperCase() !== role.toUpperCase()) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar namesAndLinks={links}/>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
