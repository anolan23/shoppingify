import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <Outlet />
      <Sidebar />
    </div>
  );
}
export default Dashboard;
