import { useState, useCallback } from 'react';
import { sendMessages as addMessageApi, getMessages as fetchMessagesApi } from '../../services/api'; 

export const useSendMessage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendMessage = async (message) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await addMessageApi(message);

            if (response.error) {
                throw new Error(response.e.message || 'Error sending message');
            }
        } catch (err) {
            console.error('Error sending message:', err);
            setError(err.message || 'Error sending message');
        } finally {
            setIsLoading(false);
        }
    };

    const getMessages = useCallback(async (receiverId) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetchMessagesApi(receiverId);

            if (response.error) {
                throw new Error(response.e.message || 'Error fetching messages');
            }

            return response.data;
        } catch (err) {
            console.error('Error fetching messages:', err);
            setError(err.message || 'Error fetching messages');
            return [];
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { sendMessage, getMessages, isLoading, error };
}
