import React from "react";
import { Box, VStack, Text } from "@chakra-ui/react";
import Item from "./Item";
import sidebarItems from "./sidebarItems";

function Sidebar() {
  return (
    <Box height="100vh" width={80} p="8" bg="#f7f7f7">
      <VStack>
        {sidebarItems.map((i) => (
          <Item key={i.label} item={i} />
        ))}
      </VStack>
    </Box>
  );
}

export default Sidebar;
