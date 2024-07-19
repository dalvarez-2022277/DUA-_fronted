import React, { useState, useEffect } from "react";
import { useUpdateUser } from "../../shared/hooks/useUpdateUser";
import { FiX } from "react-icons/fi";

export const UpdateUserForm = ({ userId, initialData, onClose }) => {
  const { updateUser, loading, error, success } = useUpdateUser();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    // Initialize the form with the user's current data
    setFormData({
      name: initialData.name || "",
      phone: initialData.phone || "",
      currentPassword: "",
      newPassword: "",
    });
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new object to only include fields to be updated
    const updateData = {
      name: formData.name,
      phone: formData.phone,
    };
    if (formData.currentPassword && formData.newPassword) {
      updateData.currentPassword = formData.currentPassword;
      updateData.newPassword = formData.newPassword;
    }

    await updateUser(userId, updateData);
    if (success) onClose(); // Close the form if the update is successful
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-4 rounded-lg shadow-md"
    >
      <div className="text-right">
        <button
          type="button"
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <FiX className="h-6 w-6" />
        </button>
      </div>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="phone">Teléfono:</label>
        <input
          id="phone"
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="currentPassword">Contraseña actual:</label>
        <input
          id="currentPassword"
          name="currentPassword"
          type="password"
          value={formData.currentPassword}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="newPassword">Nueva contraseña:</label>
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          value={formData.newPassword}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? "Actualizando..." : "Actualizar"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && (
        <p className="text-green-500 mt-2">¡Actualización exitosa!</p>
      )}
    </form>
  );
};
