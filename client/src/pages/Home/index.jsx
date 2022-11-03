import { useNavigate } from "react-router-dom";
import { Heading, Button, VStack } from "@chakra-ui/react";
import routes from "../../routes";

function Home() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate(routes.REGISTER);
  };

  return (
    <VStack spacing={10} bg="#F4F6F6" h="100vh" justifyContent="center">
      <Heading mt={-100}>Image Feature Extraction</Heading>
      <Button onClick={navigateToLogin} size="lg" colorScheme="twitter">
        Get Started
      </Button>
    </VStack>
  );
}

export default Home;
