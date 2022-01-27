import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

function Dashboard({ list }) {
  return (
    <div className="dashboard">
      <Navbar list={list} />
      <div className="dashboard__content">
        <Outlet />
        <Sidebar />
      </div>
    </div>
  );
}
export default Dashboard;
