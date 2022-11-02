import React from "react";
import { HStack, Box, Wrap, WrapItem } from "@chakra-ui/react";
import Card from "./Card";

function Content() {
  return (
    <HStack
      w="full"
      h="90vh"
      pl="8"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Wrap w="full" spacing="6">
        {[...Array(20).keys()].map((item) => (
          <Card />
        ))}
      </Wrap>
    </HStack>
  );
}

export default Content;
