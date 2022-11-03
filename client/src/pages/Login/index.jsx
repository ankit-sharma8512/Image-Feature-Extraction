import { VStack, Heading, Button, useToast, Link, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"
import TextField from "../../components/InputFields/TextField";
import PasswordField from "../../components/InputFields/PasswordField";
import { useState, useEffect } from "react";
import Auth from "../../services/auth";
import routes from "../../routes"
import useAuth from "../../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState("")
  const { auth, setAuth } = useAuth()
  const [password, setPassword] = useState("")
  const toast = useToast()
  const navigate = useNavigate()

  const login = async () => {
    try {
      const res = await Auth.loginUser(email, password)
      setAuth({ user: res.email, name: res.name })
      navigate(routes.DASHBOARD)
    } catch (error) {
      console.log(error)
      toast({ title: typeof error == "string" ? error : "Some Error Occured", status: "error", position: "top-right" })
    }
  }

  useEffect(() => {
    if (auth.user)
      navigate(routes.DASHBOARD, { replace: true })
  }, [auth, navigate])


  return (
    <VStack bg="#F4F6F6" h="100vh" justifyContent="center">
      <VStack w="22%" spacing={8}>
        <Heading fontSize="5xl">Sign In</Heading>
        <TextField label="Email Address" setField={setEmail} />
        <PasswordField label="Password" setField={setPassword} />
        <Button w="100%" colorScheme="blue" onClick={login}>Submit</Button>
        <Text>Not Registered?<Link color="blue.500" pl="3" onClick={() => navigate(routes.REGISTER)}>Register</Link></Text>
      </VStack>
    </VStack>
  );
}

export default Login;
