import Form from "./components/Form";
import UserModal from "./components/UserModal";
import BackgroundImage from "./assets/background.jpg";
import { useContext } from "react";
import { TripContext } from "./providers/TripProvider";
import { Box, Text, useMediaQuery, useDisclosure } from "@chakra-ui/react";

function App() {
  const { trip } = useContext(TripContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <Box display={"flex"} flexDirection={"row"} h="100vh">
      {isLargerThan1024 && (
        <Box
          w={"60%"}
          bgSize={"cover"}
          bgImage={`url(${BackgroundImage})`}
          bgRepeat="no-repeat"
          bgPosition="center"
        ></Box>
      )}
      <Box
        w={isLargerThan1024 ? "40%" : "100%"}
        px={14}
        display={"flex"}
        overflow={"auto"}
        flexDirection={"column"}
      >
        <Box>
          <Text fontSize={28} color={"#102040"} mt={6}>
            Então, pronto para viajar?
          </Text>
        </Box>
        <Box>
          <UserModal
            onClose={onClose}
            isOpen={isOpen}
            name={trip.name}
            email={trip.email}
          />
          <Form onOpen={onOpen} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
