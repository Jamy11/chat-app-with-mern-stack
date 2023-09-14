import React, { useEffect, useState } from "react";
import axios from "axios";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("/api/chats");
    setChats(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(chats);
  return (
    <div>
      hello
      {chats.map((chat) => (
        <div>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default Chats;
