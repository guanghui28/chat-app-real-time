import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {
	const { authUser } = useAuthContext();
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);

	useEffect(() => {
		if (authUser) {
			const socket = io("https://ghui-chat-app.onrender.com", {
				query: {
					userId: authUser._id,
				},
			});
			setSocket(socket);

			socket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [authUser]);

	return (
		<SocketContext.Provider value={{ socket, onlineUsers }}>
			{children}
		</SocketContext.Provider>
	);
};
export default SocketContextProvider;

export const useSocketContext = () => {
	const context = useContext(SocketContext);
	return context;
};
