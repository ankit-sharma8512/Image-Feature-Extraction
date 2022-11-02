import React from "react";
import Topbar from "../../components/Topbar";
import Content from "../../components/Content";
import Sidebar from "../../components/Sidebar/index";
import { HStack, Box } from "@chakra-ui/react";
function Dashboard() {
  return (
    <>
      <Topbar />
      <HStack>
        <Sidebar />
        <Content />
      </HStack>
    </>
  );
}

export default Dashboard;
