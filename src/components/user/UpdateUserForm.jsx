import React, { useState, useEffect } from "react";
import { useUpdateUser } from "../../shared/hooks/useUpdateUser";
import { FiX } from "react-icons/fi";

export const UpdateUserForm = ({ userId, initialData, onClose, onUpdateSuccess }) => {
  const { updateUser, loading, error, success } = useUpdateUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    setFormData({
      name: initialData.name || "",
      email: initialData.email || "",
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

    const updateData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    if (formData.currentPassword) {
      updateData.currentPassword = formData.currentPassword;
      if (formData.newPassword) {
        updateData.newPassword = formData.newPassword;
      }
    }

    const response = await updateUser(userId, updateData);
    if (response && !response.error) {
      onUpdateSuccess();
    }
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
        <label htmlFor="email">Correo electrónico:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
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
