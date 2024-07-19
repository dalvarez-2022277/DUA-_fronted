import { Navbar } from '../../components/navbar/Navbar.jsx';
import './dashboardPage.css';
import { ContentAll } from '../../components/Content/ContentAll.jsx';
import { ListItem } from "../../components/ListITems/ListItem.jsx"

export const DashboardPage = () => {
  return (
    <div className='dashboard-container' class="flex min-h-screen flex-col bg-gray-100 text-gray-800">
      <Navbar />
        <ContentAll />
          <ListItem/>
    </div>
  );
};
