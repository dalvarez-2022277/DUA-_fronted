import React, { useState } from "react";
import { useAddProduct } from "../../shared/hooks/useAddProduct";
import { Box, Button, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import Dropzone from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toast } from 'react-toastify';

const CONDITIONS = ['NEW', 'USED', 'REFURBISHED', 'DAMAGED', 'FOR PARTS'];

export const ProductAdd = () => {
    const { addProduct, isLoading, error } = useAddProduct();

    const [formState, setFormState] = useState({
        title: '',
        description: '',
        category: '',
        condition: '',
        img: null,
        errors: {
            title: false,
            description: false,
            category: false,
            condition: false,
            img: false
        }
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
            errors: { ...prevState.errors, [name]: !value }
        }));
    };

    const handleDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            setFormState((prevState) => ({
                ...prevState,
                img: file,
                errors: { ...prevState.errors, img: false }
            }));
        }
    };

    const handleConditionChange = (event) => {
        const value = event.target.value;
        setFormState((prevState) => ({
            ...prevState,
            condition: value,
            errors: { ...prevState.errors, condition: !value }
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { title, description, category, condition, img } = formState;
        const isValid = title && description && category && condition && img;

        if (!isValid) {
            setFormState((prevState) => ({
                ...prevState,
                errors: {
                    title: !title,
                    description: !description,
                    category: !category,
                    condition: !condition,
                    img: !img
                }
            }));
            return;
        }

        try {
            await addProduct(title, description, category, condition, img);
            toast.success("Product added successfully!"); // Mostrar mensaje de éxito
            setFormState({
                title: '',
                description: '',
                category: '',
                condition: '',
                img: null,
                errors: {
                    title: false,
                    description: false,
                    category: false,
                    condition: false,
                    img: false
                }
            }); // Limpiar formulario
        } catch (error) {
            toast.error("Failed to add product. Please try again."); // Mostrar mensaje de error
        }
    };

    return (
        <Box className="h-screen bg-gradient-to-br flex justify-center items-center w-full">
            <form onSubmit={handleSubmit}>
                <Box className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                    <Box className="space-y-4">
                        <Typography variant="h6" align="center" color="textSecondary">
                            Add Item
                        </Typography>
                        <TextField
                            name="title"
                            label="Title"
                            variant="outlined"
                            fullWidth
                            value={formState.title}
                            onChange={handleInputChange}
                            error={formState.errors.title}
                            helperText={formState.errors.title && "Title is required"}
                        />
                        <TextField
                            name="description"
                            label="Description"
                            variant="outlined"
                            fullWidth
                            value={formState.description}
                            onChange={handleInputChange}
                            error={formState.errors.description}
                            helperText={formState.errors.description && "Description is required"}
                        />
                        <TextField
                            name="category"
                            label="Category"
                            variant="outlined"
                            fullWidth
                            value={formState.category}
                            onChange={handleInputChange}
                            error={formState.errors.category}
                            helperText={formState.errors.category && "Category is required"}
                        />
                        <FormControl fullWidth variant="outlined" error={formState.errors.condition}>
                            <InputLabel>Condition</InputLabel>
                            <Select
                                name="condition"
                                value={formState.condition}
                                onChange={handleConditionChange}
                                label="Condition"
                            >
                                {CONDITIONS.map((condition) => (
                                    <MenuItem key={condition} value={condition}>
                                        {condition}
                                    </MenuItem>
                                ))}
                            </Select>
                            {formState.errors.condition && (
                                <Typography color="error" variant="body2">Condition is required</Typography>
                            )}
                        </FormControl>
                        <Box>
                            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                                Image
                            </Typography>
                            <Dropzone
                                accept={{ 'image/jpeg': [], 'image/png': [] }}
                                multiple={false}
                                onDrop={handleDrop}
                            >
                                {({ getRootProps, getInputProps, isDragActive }) => (
                                    <Box
                                        {...getRootProps()}
                                        p="1rem"
                                        sx={{
                                            border: '2px dashed #ccc',
                                            borderRadius: '8px',
                                            bgcolor: isDragActive ? '#cceffc' : '#fafafa',
                                            textAlign: 'center',
                                            cursor: 'pointer'
                                        }}
                                        className="drop-area"
                                    >
                                        <input {...getInputProps()} />
                                        {isDragActive ? (
                                            <>
                                                <CloudUploadIcon sx={{ color: "primary.main", mb: 1 }} />
                                                <Typography variant="body2">Drop the image here</Typography>
                                            </>
                                        ) : formState.img ? (
                                            <Typography variant="body2">{formState.img.name}</Typography>
                                        ) : (
                                            <>
                                                <CloudUploadIcon sx={{ color: "primary.main", mb: 1 }} />
                                                <Typography variant="body2">Drag 'n' drop an image here, or click to select one</Typography>
                                            </>
                                        )}
                                    </Box>
                                )}
                            </Dropzone>
                            {formState.errors.img && (
                                <Typography color="error">Image is required</Typography>
                            )}
                        </Box>
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={isLoading}
                        sx={{ mt: 3 }}
                    >
                        {isLoading ? "Adding..." : "Add Product"}
                    </Button>
                    {error && (
                        <Typography color="error" align="center" sx={{ mt: 2 }}>
                            {error}
                        </Typography>
                    )}
                </Box>
            </form>
        </Box>
    );
};
