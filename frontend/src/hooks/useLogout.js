import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const logout = async () => {
		try {
			setLoading(true);
			const res = await fetch("/api/auth/logout", {
				method: "POST",
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			// clear local storage
			localStorage.removeItem("chat-user");
			// set authUser context to null
			setAuthUser(null);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};

export default useLogout;
