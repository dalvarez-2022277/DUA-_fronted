import { Route, Routes } from 'react-router-dom'
import { ProductAdd } from '../ProductsNew/ProductAdd.jsx';
//import { ListItem } from '../ListITems/ListItem.jsx';
import { ListMy } from '../ListITems/ListMy.jsx';


export const ContentAll = () => {
    return(
        <Routes>
            <Route path="addProducts" element={<ProductAdd />} />
            <Route path="listItems" element={<ListMy />} />
        </Routes>
    )

};