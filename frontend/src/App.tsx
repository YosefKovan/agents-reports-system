import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login/Login";
import AgentDashboard from "./pages/AgentDashboard/AgentDashboard";
import NewReportPage from "./pages/NewReportPage/NewReportPage";
import MyReportsPage from "./pages/MyReportsPage/MyReportsPage";
import AdminUsersPage from "./pages/AdminUsersPage/AdminUsersPage";
import AddUser from "./pages/AddUser/AddUser";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminReportsPage from "./pages/AdminReportsPage/AdminReportsPage";
import CsvUploadPage from "./pages/CsvUploadsPage/CsvUploadPage";
import {adminRoutes, agentRoutes} from "./utils/links";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/agent" element={<ProtectedRoute role="AGENT" links={agentRoutes}/>}>
            <Route path="dashboard" element={<AgentDashboard />} />
            <Route path="new-report" element={<NewReportPage />} />
            <Route path="my-reports" element={<MyReportsPage />} />
            <Route path="csv-upload" element={<CsvUploadPage />} />
          </Route>

          <Route
            path="/admin" element={<ProtectedRoute role="ADMIN" links={adminRoutes} />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="view-users" element={<AdminUsersPage />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="reports" element={<AdminReportsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
