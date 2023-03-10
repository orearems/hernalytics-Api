import {
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  HStack,
  Card,
  Grid,
  CardHeader,
  Flex,
  CardBody,
  Heading,
  Avatar,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const menuStyle = {
    display: "inline",
    textAlign: "center",
    color: "white",
    p: "0",
    fontSize: ".9rem",
    fontWeight: "800",
    w: "fit-content",
    bg: "transparent",
    _hover: {
      bg: "transparent",
    },
  };

  // const menuList = {
  //   bg: "#1C2031",
  //   w: "264px",
  //   h: "30px",
  //   maxHeight: "2rem",
  //   overFlow: "scroll",
  //   px: "0",
  //   color: "#C6C7CB",
  //   py: "0",
  //   border: "none",
  //   _hover: {
  //     bg: "#1C2031",
  //   },
  // };

  // const menuItem = {
  //   bg: "#1C2031",
  // };

  const styles = {
    display: "inline",
    textAlign: "center",
    color: "white",
    fontSize: ".9rem",
    fontWeight: "800",
    bg: "transparent",
  };

  return (
    <HStack gap="10px" alignItems="center">
      <Text sx={styles}>ABOUT US</Text>
      <Menu>
        <MenuButton as={Button} sx={menuStyle} rightIcon={<ChevronDownIcon />}>
          OUR COMMUNITIES
        </MenuButton>
        <MenuList borderRadius="none" w="780px">
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <Card
              border="none"
              w="370px"
              boxShadow="none"
              h="70px"
              px="20px"
              py="10px"
            >
              <Flex gap="20px">
                <CardHeader p="0">
                  <Avatar w="40px" h="40px" borderRadius="3px"></Avatar>
                </CardHeader>
                <CardBody p="0">
                  <Heading fontSize="18px" lineHeight="27px">
                    General User
                  </Heading>
                  <Text fontSize={".8rem"}>
                    Odio mi in id tellus turpis elementum ipsum.
                  </Text>
                </CardBody>
              </Flex>
            </Card>

            <Card
              border="none"
              w="370px"
              boxShadow="none"
              h="70px"
              px="20px"
              py="10px"
            >
              <Flex gap="20px">
                <CardHeader p="0">
                  <Avatar w="40px" h="40px" borderRadius="3px"></Avatar>
                </CardHeader>
                <CardBody p="0">
                  <Heading fontSize="18px" lineHeight="27px">
                    Election Candidates
                  </Heading>
                  <Text fontSize={".8rem"}>
                    Odio mi in id tellus turpis elementum ipsum.
                  </Text>
                </CardBody>
              </Flex>
            </Card>
            <Card
              border="none"
              w="370px"
              boxShadow="none"
              h="70px"
              px="20px"
              py="10px"
            >
              <Flex gap="20px">
                <CardHeader p="0">
                  <Avatar w="40px" h="40px" borderRadius="3px"></Avatar>
                </CardHeader>
                <CardBody p="0">
                  <Heading fontSize="18px" lineHeight="27px">
                    Decide to Run {' (DTR)'}
                  </Heading>
                  <Text fontSize={".8rem"}>
                    Odio mi in id tellus turpis elementum ipsum.
                  </Text>
                </CardBody>
              </Flex>
            </Card>
            <Card
              border="none"
              w="370px"
              boxShadow="none"
              h="70px"
              px="20px"
              py="10px"
            >
              <Flex gap="20px">
                <CardHeader p="0">
                  <Avatar w="40px" h="40px" borderRadius="3px"></Avatar>
                </CardHeader>
                <CardBody p="0">
                  <Heading fontSize="18px" lineHeight="27px">
                    Reporters
                  </Heading>
                  <Text fontSize={".8rem"}>
                    Odio mi in id tellus turpis elementum ipsum.
                  </Text>
                </CardBody>
              </Flex>
            </Card>
          </Grid>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={Button} sx={menuStyle} rightIcon={<ChevronDownIcon />}>
          ELECTION DATA
        </MenuButton>
        <MenuList borderRadius="none">
          <MenuItem>Election Day Live Updates</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem>Post- Election Analysis</MenuItem>
        </MenuList>
      </Menu>
      <Text sx={styles}>E-BUDDY</Text>
      <Text sx={styles}>VEO PLATFORM</Text>
      <Text sx={styles}>LOGIN</Text>
      <Button
        bg="#E5B805"
        w="129px"
        h="47px"
        borderRadius="none"
        display="inline"
        color="black"
      >
        SIGN UP
      </Button>
    </HStack>
  );
};

export default Navbar;
