import { type LinkInterface } from "../interfaces/link.interfaces";

export const adminRoutes : LinkInterface[] = [
  { to: "/admin/dashboard", name: "Dashboard" },
  { to: "/admin/view-users", name: "View Users" },
  { to: "/admin/add-user", name: "Add User" },
  { to: "/admin/reports", name: "Reports" }
];

export const agentRoutes : LinkInterface[] = [
  { to: "/agent/dashboard", name: "Dashboard" },
  { to: "/agent/new-report", name: "New Report" },
  { to: "/agent/my-reports", name: "My Reports" },
  {to : "/agent/csv-upload", name  : "Csv Upload"}
];

 