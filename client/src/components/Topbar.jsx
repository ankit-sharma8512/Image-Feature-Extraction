import React from "react";
import { Avatar, Flex, HStack, Box, Heading, Spacer } from "@chakra-ui/react";
import Searchbar from "./Searchbar";
function Topbar() {
  return (
    <Flex h="10vh" justifyContent="space-between" bg="#f7f7f7">
      <Box pl="10" display="flex" alignItems="center" justifyContent="center">
        <Heading size="md">
          Image Feature
          <br /> Extraction
        </Heading>
      </Box>

      <Box w="35%" display="flex" alignItems="center" justifyContent="center">
        <Searchbar />
      </Box>

      <Box pr="10" display="flex" alignItems="center" justifyContent="center">
        <Avatar
          bg="teal.500"
          name="Ankit Sharma"
          src="https://bit.ly/broken-link"
        />
      </Box>
    </Flex>
  );
}

export default Topbar;
