import React, { useState } from 'react'
import { Box, Text, HStack, VStack } from '@chakra-ui/react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

function Item({ item }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => setIsExpanded(state => !state)

  return (
    <Box w="98%">
      <HStack w="full" p="2" borderRadius="3" justifyContent="space-between" onClick={toggleExpanded} h="14" _hover={{ cursor: "pointer", bg: "blue.500", color: "white" }}>
        <HStack alignItems="center">
          {item.icon}
          <Text w="full">{item.label}</Text>
        </HStack>
        {item.subItems.length && (isExpanded ? <FiChevronUp /> : <FiChevronDown />)}
      </HStack>
      {isExpanded && <VStack ml="5" bg="#efefef34" borderRadius="4">
        {item.subItems.map(subitem => (
          <HStack w="full" p="4" borderRadius="3" h="12" _hover={{ cursor: "pointer", bg: "blue.400", color: "white" }}>
            <Text w="full">{subitem.label}</Text>
          </HStack>
        ))}
      </VStack>}
    </Box>
  )
}

export default Item