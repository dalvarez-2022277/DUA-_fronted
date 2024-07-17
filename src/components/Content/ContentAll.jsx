import { Route, Routes } from 'react-router-dom'
import { ProductAdd } from '../ProductsNew/ProductAdd.jsx';

export const ContentAll = () => {
    return(
        <Routes>
            <Route path="addProducts" element={<ProductAdd />} />
        </Routes>
    )

};