import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login/Login";
import AgentDashboard from "./pages/AgentDashboard/AgentDashboard";
import NewReportPage from "./pages/NewReportPage/NewReportPage";
import MyReportsPage from "./pages/MyReportsPage/MyReportsPage";
import AdminUsersPage from "./pages/AdminUsersPage/AdminUsersPage"
import AddUser from "./pages/AddUser/AddUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<AgentDashboard />} />
          <Route path="/new-report-page" element={<NewReportPage />} />
          <Route path="/my-reports-page" element={<MyReportsPage />} />
           
          <Route path="/admin-users-page" element={<AdminUsersPage />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
