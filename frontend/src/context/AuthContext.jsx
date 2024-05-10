import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(
		JSON.parse(localStorage.getItem("chat-user")) || null
	);

	return (
		<AuthContext.Provider value={{ authUser, setAuthUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;

export const useAuthContext = () => {
	return useContext(AuthContext);
};
