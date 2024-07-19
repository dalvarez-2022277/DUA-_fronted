import React, { useState } from "react";
import { useAddProduct } from "../../shared/hooks/useAddProduct";
import { Input } from "../Input";

export const ProductAdd = () => {
    const { addProduct, isLoading } = useAddProduct();

    const [formState, setFormState] = useState({
        title: {
            value: "",
            isValid: false,
            showError: false,
        },
        description: {
            value: "",
            isValid: false,
            showError: false,
        },
        category: {
            value: "",
            isValid: false,
            showError: false,
        },
        condition: {
            value: "",
            isValid: false,
            showError: false,
        },
        img: {
            value: "",
            isValid: false,
            showError: false,
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("img: ",formState.img.value);
        console.log("title: ",formState.title);

        
        addProduct(
            formState.title.value,
            formState.description.value,
            formState.category.value,
            formState.condition.value,
            formState.img.value
        );
    };

    return (
        <div className="h-screen bg-gradient-to-br flex justify-center items-center w-full">
            <form onSubmit={handleSubmit}>
                <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                    <div className="space-y-4">
                        <h1 className="text-center text-2xl font-semibold text-gray-600">Add Item</h1>
                        <div>
                            <label className="block mb-1 text-gray-600 font-semibold">Title</label>
                            <Input
                                field="title"
                                type="text"
                                label="title"
                                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                                value={formState.title.value}
                                onChangeHandler={handleInputValueChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-600 font-semibold">Description</label>
                            <Input
                                field="description"
                                type="text"
                                label="description"
                                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                                value={formState.description.value}
                                onChangeHandler={handleInputValueChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-600 font-semibold">Category</label>
                            <Input
                                field="category"
                                type="text"
                                label="category"
                                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                                value={formState.category.value}
                                onChangeHandler={handleInputValueChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-600 font-semibold">Condition</label>
                            <Input
                                field="condition"
                                type="text"
                                label="condition"
                                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                                value={formState.condition.value}
                                onChangeHandler={handleInputValueChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-600 font-semibold">Image</label>
                            <Input
                                field="img"
                                type="file"
                                label="img"
                                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                                value={formState.img.value}
                                onChangeHandler={handleInputValueChange}
                                required
                                accept="image/*" // Asegúrate de que solo se seleccionen imágenes
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
                        disabled={isLoading}
                    >
                        {isLoading ? "Adding..." : "Add Product"}
                    </button>
                </div>
            </form>
        </div>
    );
};
