import { Box, Text, VStack } from '@chakra-ui/react'
import Item from "./Item"
import React from 'react'
import { FiHome } from 'react-icons/fi'
import routes from '../../routes'

const homeItem = {
  label: "Dashboard",
  icon: <FiHome />,
  link: routes.DASHBOARD
}

function Sidebar({ filename, items }) {
  return (
    <Box w="80" h="90vh" pos="absolute" bg="#f7f7f7">
      <VStack>
        <Item key={homeItem.label} item={homeItem} />
        <Text py="4">{filename}</Text>
        {filename ? items.map(i => (
          <Item key={i.label} item={i} />
        )) : <Text pt="8" w="80%" textAlign="center">Select a file to be processed <br /> or <br /> Add a new one</Text>}
      </VStack>
    </Box>
  )
}

export default Sidebar