import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, Package, ClipboardList, MessageCircle, Menu, Folder } from "lucide-react";

const AdminSidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        
        <div className={`sticky-top h-screen bg-gray-100 text-white left-0 top-13 z-150 flex flex-col transition-all duration-100 ${isCollapsed ? "w-13" : "w-[200px]"}`}> 
            {/* Toggle Button */}
            <button 
                onClick={() => setIsCollapsed(!isCollapsed)} 
                className="text-black mb-4 p-2 hover:bg-gray-200 rounded-lg"
            >
                <Menu size={20} />
            </button>

            {/* Sidebar Navigation */}
            <nav className="flex flex-col space-y-2">
                {[
                    { to: "/admin/dashboard", label: "Dashboard", icon: <Home size={20} /> },
                    { to: "/admin/users", label: "Users", icon: <Users size={20} /> },
                    { to: "/admin/equipments", label: "Equipments", icon: <Package size={20} /> },
                    { to: "/admin/bookings", label: "Bookings", icon: <ClipboardList size={20} /> },
                    { to: "/admin/queries", label: "Queries", icon: <MessageCircle size={20} /> },
                    { to: "/admin/categories", label: "Categories", icon: <Folder size={20} /> } 
                ].map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex items-center gap-4 p-3 rounded-lg transition text-black ${
                                isActive ? "bg-gray-300 text-blue-600 font-bold" : "hover:bg-gray-200"
                            }`
                        }
                    >
                        {item.icon}
                        {!isCollapsed && <span>{item.label}</span>}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default AdminSidebar;
