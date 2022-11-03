import React, { useState } from 'react'
import { Input, Button, InputGroup, InputRightElement, FormControl, FormLabel } from '@chakra-ui/react'
import { FiEye, FiEyeOff } from "react-icons/fi"

function Password({ label, setField }) {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <InputGroup size='md'>
        <Input type={show ? 'text' : 'password'} placeholder={label} onChange={(e) => setField(e.target.value)} />
        <InputRightElement>
          <Button size='sm' onClick={handleClick}> {show ? <FiEyeOff /> : <FiEye />} </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  )
}

export default Password