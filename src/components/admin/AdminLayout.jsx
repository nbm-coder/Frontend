import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="flex">
      {/* Sidebar should be fixed */}
      <AdminSidebar />
      
      {/* Main Content Section */}
      <div className="flex-1 p-6 ml-[260px]"> {/*sidebar width */}
        <AdminNavbar />
        <Outlet /> {/* This will render the admin routes from App.jsx */}
      </div>
    </div>
  );
}
