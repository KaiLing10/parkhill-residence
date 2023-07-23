import React from 'react';
import { Link } from 'react-router-dom';

// custom style
const dashboardCardStyle = "p-4 flex justify-center items-center text-center md:py-16 md:p-6 bg-yellow-400/60 rounded shadow-md shadow-md transition ease-in-out delay-150 hover:bg-yellow-400 hover:shadow-lg hover:scale-105"
const dashboardTextStyle = "text-lg md:text-2xl font-bold mb-2"

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 h-[100vh] font-content">
      <div className="mx-auto px-5 md:px-10 py-10">
        <h1 className="text-3xl md:text-4xl font-title font-semibold mb-6">Admin Page</h1>
        {/* content */}
        <div className="grid grid-cols-2 gap-2 md:gap-6">
          <Link to="/adminRentBooking" className={dashboardCardStyle}>
            <h2 className={dashboardTextStyle}>Rent Bookings</h2>
          </Link>
          <Link to="/adminAppointmentBooking" className={dashboardCardStyle}>
            <h2 className={dashboardTextStyle}>Physical Visit Appointments</h2>
          </Link>
          <Link to="/adminEnquiries" className={dashboardCardStyle}>
            <h2 className={dashboardTextStyle}>User Messages</h2>
          </Link>
          <Link to="/adminUnitPreference" className={dashboardCardStyle}>
            <h2 className={dashboardTextStyle}>Unit Preferences</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
