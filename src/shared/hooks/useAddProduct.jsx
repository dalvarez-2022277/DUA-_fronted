import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { addProduct as addProductRequest } from "../../services/api";

const convertImageToBase64 = (img) => {
    console.log(img);
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

export const useAddProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    
    const addProduct = async (title, description, category, condition, img) => {
        setIsLoading(true);
        try {
            const imgBase64 = await convertImageToBase64(img);

            const response = await addProductRequest({
                title,
                description,
                category,
                condition,
                img: imgBase64,
            });

            toast.success("Producto agregado exitosamente");
            navigate("/"); // Redirigir a la página de inicio o a donde sea necesario
        } catch (error) {
            console.error("Error al agregar producto:", error);
            toast.error("Ocurrió un error al agregar el producto, intenta de nuevo");
        } finally {
            setIsLoading(false);
        }
    };

    return {
        addProduct,
        isLoading,
    };
};
