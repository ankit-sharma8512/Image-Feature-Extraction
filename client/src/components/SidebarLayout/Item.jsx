import React from 'react'
import { Box, Text, HStack } from '@chakra-ui/react'
// import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { useNavigate } from 'react-router-dom'
import { itemBaseStyles } from './sidebar.styles'

function Item({ item }) {
  // const [isExpanded, setIsExpanded] = useState(false)
  const navigate = useNavigate()

  const toggleExpanded = () => { }

  const handleClick = () => {
    if (item.link)
      navigate(item.link)
    else
      toggleExpanded()
  }

  return (
    <Box w="98%">
      <HStack {...itemBaseStyles} onClick={handleClick} >
        <HStack alignItems="center">
          {item.icon}
          <Text w="full">{item.label}</Text>
        </HStack>
        {/* {item.subItems?.length && (isExpanded ? <FiChevronUp /> : <FiChevronDown />)} */}
      </HStack>
      {/* {isExpanded && <VStack ml="5" borderRadius="4">
        {item.subItems?.map(subitem => (
          <HStack w="full" p="4" borderRadius="3" h="12" _hover={{ cursor: "pointer", bg: "blue.400", color: "white" }}>
            <Text w="full">{subitem.label}</Text>
          </HStack>
        ))}
      </VStack>} */}
    </Box>
  )
}

export default Item