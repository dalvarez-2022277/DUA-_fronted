import { Navbar } from '../../components/navbar/Navbar.jsx';
import { AboutUs } from '../../components/nosotros/AboutUs.jsx';

export const DashboardPage = () => {
  return (
    <div class="flex min-h-screen flex-col bg-gray-100 text-gray-800">
      <Navbar />
      <main class="flex flex-grow items-center justify-center bg-white text-center text-5xl font-bold shadow-md">
        <AboutUs />
      </main>
    </div>
  );
};
