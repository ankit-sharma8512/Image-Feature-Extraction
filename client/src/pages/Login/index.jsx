import { VStack, Heading, Button } from "@chakra-ui/react";
import Email from "../../components/Email";
import Password from "../../components/Password";

function Login() {
  return (
    <VStack bg="#F4F6F6" h="100vh" justifyContent="center">
      <VStack w="22%" spacing={5}>
        <Heading mt={-20}>Sign In</Heading>
        <Email />
        <Password />
        <Button w="100%" colorScheme="twitter">
          Submit
        </Button>
      </VStack>
    </VStack>
  );
}

export default Login;
