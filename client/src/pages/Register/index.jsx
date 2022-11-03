import { VStack, Heading, Button, useToast, Link, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"
import TextField from "../../components/InputFields/TextField";
import PasswordField from "../../components/InputFields/PasswordField";
import { useState, useEffect } from "react";
import Auth from "../../services/auth";
import routes from "../../routes"
import useAuth from "../../hooks/useAuth";

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { auth, setAuth } = useAuth()
  const toast = useToast()
  const navigate = useNavigate()

  const register = async () => {
    try {
      const res = await Auth.registerUser(name, email, password)
      setAuth({ user: res.email, name: res.name })
      navigate(routes.DASHBOARD)
    } catch (error) {
      toast({ title: error, status: "error", position: "top-right" })
    }
  }

  useEffect(() => {
    if (auth.user)
      navigate(routes.DASHBOARD, { replace: true })
  }, [auth, navigate])


  return (
    <VStack bg="#F4F6F6" h="100vh" justifyContent="center">
      <VStack w="22%" spacing={8}>
        <Heading fontSize="5xl">Register</Heading>
        <TextField label="Name" setField={setName} />
        <TextField label="Email Address" setField={setEmail} />
        <PasswordField label="Password" setField={setPassword} />
        <Button w="100%" colorScheme="blue" onClick={register}>Register</Button>
        <Text>Already Registered?<Link color="blue.500" pl="3" onClick={() => navigate(routes.LOGIN)}>Sign In</Link></Text>
      </VStack>
    </VStack>
  );
}

export default Register;
