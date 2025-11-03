import Link from 'next/link';
import { FaTachometerAlt, FaUsers, FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <Link href="/admin/dashboard" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </Link>
        <Link href="/admin/users" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <FaUsers />
          <span>Users</span>
        </Link>
        <Link href="/admin/logout" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <FaSignOutAlt />
          <span>Logout</span>
        </Link>
      </nav>
    </div>
  );
}
