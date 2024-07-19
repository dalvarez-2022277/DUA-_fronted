import { useState } from 'react';
import { addProduct as addProductApi } from '../../services/api'; // Ajusta la ruta según tu estructura de archivos

export const useAddProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const addProduct = async (title, description, category, condition, imgFile) => {
        setIsLoading(true);
        setError(null);

        try {
            // Convertir la imagen a base64
            const imgBase64 = await convertImageToBase64(imgFile);

            // Crear los datos del producto para enviar
            const productData = {
                title,
                description,
                category,
                condition,
                img: imgBase64
            };

            // Realizar la solicitud POST
            const response = await addProductApi(productData);

            if (response.error) {
                throw new Error(response.e.message || 'Error adding product');
            }
        } catch (err) {
            console.error('Error adding product:', err);
            setError(err.message || 'Error adding product');
        } finally {
            setIsLoading(false);
        }
    };

    const convertImageToBase64 = (imageFile) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    return { addProduct, isLoading, error };
};
