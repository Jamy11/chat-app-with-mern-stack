import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../../context/ChatProvider";

const Chats = () => {
  const { user } = ChatState();
  return <div style={{ width: "100%" }}>{user && "asdasdsa"}</div>;
};

export default Chats;
