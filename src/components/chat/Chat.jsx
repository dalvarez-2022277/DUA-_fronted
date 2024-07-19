import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSendMessage } from '../../shared/hooks/useSendMessage';
import { useAuth } from '../../shared/hooks/useMyUser';
import io from 'socket.io-client';

const socket = io('https://node-js-donation-place-back.vercel.app');

export const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const { sendMessage, getMessages, isLoading, error } = useSendMessage();
    const { userName } = useAuth();
    const senderName = userName;
    const location = useLocation();
    const { receiverId, name } = location.state || {};

    useEffect(() => {
        const fetchMessages = async () => {
            if (!receiverId) return;
            try {
                const initialMessages = await getMessages(receiverId);
                setMessages(initialMessages);
            } catch (err) {
                console.error('Error fetching messages:', err);
            }
        };

        fetchMessages();

        socket.on('chatMessage', (msg) => {
            setMessages(prevMessages => [msg, ...prevMessages]);
        });

        return () => {
            socket.off('chatMessage');
            setMessages([]); 
        };
    }, [receiverId, getMessages, userName]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (message.trim() === '') {
            return;
        }

        const msg = { receiverId, message };
        try {
            setMessages(prevMessages => [{ senderId: 'You', message }, ...prevMessages]);
            setMessage('');
            await sendMessage(msg);
            socket.emit('chatMessage', msg);
        } catch (err) {
            console.error('Error sending message:', err);
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.senderId === 'You' ? 'You' : senderName}:</strong> {msg.message}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="flex items-center p-4">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 p-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:outline-none"
                    placeholder="Type a message..."
                />
                <button
                    type="submit"
                    className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Send
                </button>
            </form>
            {isLoading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};
