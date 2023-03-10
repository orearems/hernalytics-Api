import {
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import MainMenu from "./MainMenu";
import StatsBar from "./StatsBar";

const Main = () => {

  return (
    <>
      <Flex as="main" px="100px" alignItems="center" gap="20px" pt="42px">
        <Heading as="h1" color="white">
          Post Election Data
        </Heading>
        <Text bg="#1E1E1E" w="fit-content" color="white">
          PRESIDENTIAL / 2023
        </Text>
      </Flex>
      <Flex px="100px" pt="46px" justifyContent='space-between'>
        <Box>
          <Text fontSize="24px" color="white">
            Presidential Race
          </Text>
        </Box>
        <MainMenu />
      </Flex>
      <StatsBar />
    </>
  );
};

export default Main;
