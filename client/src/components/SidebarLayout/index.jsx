import React from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar"
import sidebarItems from "./sidebarItems"
import { useParams } from "react-router-dom";

function SidebarLayout({ children }) {
  const { filename } = useParams()

  return (
    <Box minH="90vh">
      <Sidebar filename={filename} items={sidebarItems} />
      <Box h="90vh" ml="80" p="4" overflowY="scroll">
        {children}
      </Box>
    </Box>
  );
}

export default SidebarLayout;
