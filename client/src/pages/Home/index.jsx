import { useNavigate } from "react-router-dom";
import { Heading, Button, VStack } from "@chakra-ui/react";

function Home() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
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
