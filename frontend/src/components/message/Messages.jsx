import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import { useEffect, useRef } from "react";
import useListenMessage from "../../hooks/useListenMessage";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessage();
	const lastMessageRef = useRef();

	useEffect(() => {
		lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		<div className="px-4 flex-1 overflow-auto">
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3).map((_, idx) => <MessageSkeleton key={idx} />)]}

			{!loading && messages.length === 0 && (
				<p className="text-center">Send a message to start a conversation</p>
			)}
		</div>
	);
};

export default Messages;
