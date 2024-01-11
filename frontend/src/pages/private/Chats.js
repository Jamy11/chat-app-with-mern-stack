import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../../context/ChatProvider";
import { Box } from "@chakra-ui/layout";
import SideDrawer from "../../components/SideDrawer";
import MyChats from "../../components/MyChats";
import Chatbox from "../../components/Chatbox";

const Chats = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chats;
