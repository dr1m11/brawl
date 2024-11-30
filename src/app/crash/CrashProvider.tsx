'use client'
import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import {SOCKET_API_URL} from "@/constants";
interface WebSocketContextType {
    socket: WebSocket | null;
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    sendMessage: (message: any) => void;
}
const WebSocketContext = createContext<WebSocketContextType>({
    socket: null,
    sendMessage: () => {}
});
export const WebSocketProvider = ({ children }: {children: ReactNode}) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    useEffect(() => {
        const newSocket = new WebSocket(`${SOCKET_API_URL}/crash`);
        newSocket.onopen = () => {
            setSocket(newSocket);
        };
        return () => {
            newSocket.close();
        };
    }, []);
    const sendMessage = (message: any) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify(message));
        }
    };
    return (
        <WebSocketContext.Provider value={{ socket, sendMessage }}>
            {children}
        </WebSocketContext.Provider>
    );
};
export const useWebSocket = () => useContext(WebSocketContext);