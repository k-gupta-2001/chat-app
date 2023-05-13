import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:5001";
const Chatpage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const data = await fetch(`${API_URL}/api/chats`);
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return <div>Chat page</div>;
};

export default Chatpage;
