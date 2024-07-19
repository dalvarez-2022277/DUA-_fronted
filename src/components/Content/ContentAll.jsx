import { Route, Routes } from 'react-router-dom';
import { ProductAdd } from '../ProductsNew/ProductAdd.jsx';
import { ListItem } from '../ListITems/ListItem.jsx';
import { Lema } from '../lema/Lema.jsx';
import { ListMy } from '../ListITems/ListMy.jsx';
import {Chat} from '../../components/chat/Chat.jsx'

export const ContentAll = () => {
  return (
    <Routes>
      <Route path="addProducts" element={<ProductAdd />} />
      <Route path="listItems" element={<ListItem />} />
      <Route path="listMy" element={<ListMy />} />
      <Route path="/" element={<Lema />} /> 
      <Route path="/lema" element={<Lema />} /> 
      <Route path='chat' element={ <Chat /> } />
    </Routes>
  );
};
