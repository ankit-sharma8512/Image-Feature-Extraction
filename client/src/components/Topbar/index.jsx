import React from "react";
import { HStack, Heading } from "@chakra-ui/react";
import UserMenu from "./UserMenu";

function Topbar() {
  return (
    <HStack px="6" w="full" h="10vh" justifyContent="space-between" bg="#f7f7f7">
      <Heading size="md">Image Feature Extraction</Heading>
      <UserMenu />
    </HStack>
  );
}

export default Topbar;
