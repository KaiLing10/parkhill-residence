import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-6">
          {/* Your navigation links */}
          <ul className="flex space-x-4">
            <li>
              <Link to="/admin/bookings" className="text-gray-600 hover:text-gray-900">Bookings</Link>
            </li>
            <li>
              <Link to="/admin/units" className="text-gray-600 hover:text-gray-900">Units</Link>
            </li>
            <li>
              <Link to="/admin/appointments" className="text-gray-600 hover:text-gray-900">Appointments</Link>
            </li>
            <li>
              <Link to="/admin/messages" className="text-gray-600 hover:text-gray-900">Messages</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-6">
        {/* Your admin content */}
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/admin/bookings" className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-2">Bookings</h2>
            {/* Display the total number of bookings */}
            <p>10 Bookings</p>
          </Link>
          <Link to="/admin/units" className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-2">Units</h2>
            {/* Display the total number of units */}
            <p>2 Units Available currently</p>
          </Link>
          <Link to="/admin/appointments" className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-2">Appointments</h2>
            {/* Display the total number of appointments */}
            <p>5 Appointments</p>
          </Link>
          <Link to="/admin/messages" className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-2">Messages</h2>
            {/* Display the total number of messages */}
            <p>20 Messages</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
