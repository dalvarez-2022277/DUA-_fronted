import { Navbar } from '../../components/navbar/Navbar.jsx';
//import { CardItem } from '../../components/ListITems/CardItem.jsx';
import { ListItem as ListItemsC } from '../../components/ListITems/ListItem.jsx';

export const DsaboardUser = () => {
  return (
    <div class="flex min-h-screen flex-col bg-gray-100 text-gray-800">
      <Navbar />
      <ListItemsC />
      <main class="flex flex-grow items-center justify-center bg-white text-center text-5xl font-bold shadow-md">

      </main>
    </div>
  );
};
