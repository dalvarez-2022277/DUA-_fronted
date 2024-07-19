import { Navbar } from '../../components/navbar/Navbar.jsx';
import './dashboardPage.css';
import { ContentAll } from '../../components/Content/ContentAll.jsx';

export const DashboardPage = () => {
  return (
    <div className='dashboard-container flex min-h-screen flex-col bg-gray-100 text-gray-800'>
      <Navbar />
      <ContentAll />
    </div>
  );
};
