import { Text, Flex, SimpleGrid, Box, Heading } from "@chakra-ui/react";
import hernaLogo from "../Assets/hernaLogo.svg";

const Footer = () => {
  const footerStyle = {
    color: "white",
    pt: "20px",
  };

  const footerTitle ={
    color: 'white',
    fontSize: '16px',
    pt: '80px',
  }

  const footerText = {
    color: 'white',
    pt: '24px'
  }

  return (
    <Flex
      as="section"
      px="100px"
      gap="4rem"
      bg="rgba(255, 255, 255, 0.1)"
      w="full"
      h="360px"
    >
      <Box w="30%" pt="80px">
        <img src={hernaLogo} alt="hernalytics logo" />
        <Text sx={footerStyle}>
          Isale Eko Avenue, Dolphin Estate, Ikoy, Lagos, Nigeria
        </Text>
        <Text sx={footerStyle}>&copy; 2022 Hernalytics</Text>
      </Box>
      <SimpleGrid columns={3} gap="8rem">
        <Box>
          <Heading sx={footerTitle}>About</Heading>
          <Text sx={footerText}>Our Story</Text>
          <Text sx={footerText}>Blog</Text>
          <Text sx={footerText}>About Hernalytics</Text>
          <Text sx={footerText}>Videos</Text>
        </Box>

        <Box>
          <Heading sx={footerTitle}>Support</Heading>
          <Text sx={footerText}>FAQs</Text>
          <Text sx={footerText}>Privacy Policy</Text>
          <Text sx={footerText}>Terms of Service</Text>
        </Box>

        <Box>
          <Heading sx={footerTitle}>Let's chat!</Heading>
          <Text sx={footerText}>hernalytics@gmail.com</Text>
          <Text sx={footerText}>+234 801 234 5678</Text>
        </Box>
      </SimpleGrid>
    </Flex>
  );
};

export default Footer;
