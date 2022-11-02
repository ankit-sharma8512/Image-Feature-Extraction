import React from "react";
import { Box, Text, Center, VStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { GrDocumentCsv } from "react-icons/gr";

function Card() {
  const property = {
    title: "File 1",
  };

  return (
    <VStack
      p="2"
      borderRadius="4"
      _hover={{ bg: "gray.100" }}
      justifyContent="center"
    >
      <Icon as={GrDocumentCsv} fontSize="60px" />
      <Text>FileName</Text>
    </VStack>
  );
}

export default Card;
