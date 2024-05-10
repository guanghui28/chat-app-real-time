import { useAuthContext } from "../../context/AuthContext";
import { formatTime } from "../../utils/formatTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = authUser._id === message.senderId;
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe
		? authUser.profilePic
		: selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img src={profilePic} alt={`picture avatar`} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor}`}>
				{message.message}
			</div>
			<div className="chat-footer opacity-50 text-xs gap-1 items-center">
				{formatTime(message.createdAt)}
			</div>
		</div>
	);
};

export default Message;
