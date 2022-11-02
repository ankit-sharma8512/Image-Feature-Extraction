import React from "react";
import { BsSearch } from "react-icons/bs";
import { Input, InputGroup, InputRightElement, Icon } from "@chakra-ui/react";

function Searchbar() {
  return (
    <InputGroup>
      <Input isInvalid errorBorderColor="#53b0ae" placeholder="Search Files" />
      <InputRightElement children={<Icon as={BsSearch} />} />
    </InputGroup>
  );
}

export default Searchbar;
