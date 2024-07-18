import { useState } from 'react';
import { putUser } from '../../services/api';

export const useUpdateUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const updateUser = async (id, data) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const response = await putUser(id, data);
            if (response.error) {
                throw new Error(response.e.message);
            }
            setSuccess(true);
            return response;
        } catch (e) {
            setError(e.message);
            return { error: true, message: e.message };
        } finally {
            setLoading(false);
        }
    };

    return { updateUser, loading, error, success };
};