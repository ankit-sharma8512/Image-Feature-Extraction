import React from 'react'
import { Avatar, Menu, MenuButton, MenuList, MenuItem, MenuDivider, VStack, Text } from "@chakra-ui/react"
import useAuth from '../../hooks/useAuth'
import Storage from '../../services/storage'
import { useNavigate } from 'react-router-dom'
import routes from '../../routes'

function UserMenu() {
  const { auth, setAuth } = useAuth()
  const navigate = useNavigate()

  const logout = () => {
    setAuth({})
    Storage.clearAccessToken()
    navigate(routes.LOGIN)
  }

  return (
    <Menu>
      <MenuButton>
        <Avatar bg="blue.500" color="white" name={auth.name} />
      </MenuButton>
      <MenuList zIndex="10">
        <VStack px="3" alignItems="flex-start">
          <Text>Name: {auth.name}</Text>
          <Text>Email: {auth.user}</Text>
        </VStack>
        <MenuDivider />
        <MenuItem color="red" onClick={logout}>Log Out</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default UserMenu