import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

function SearchBar({ ...props }) {
  return (
    <InputGroup>
      <Input {...props} placeholder='Search File' />
      <InputRightElement>
        <FiSearch />
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchBar