import { Box, Heading } from "@chakra-ui/react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import VisualData from "./Components/VisualData";
import './App.css';

Heading.defaultProps = {
  fontFamily: 'jost'
}

function App() {
  return (
    <Box bg="#1F2335" pt="5rem">
      <Header />
      <Main />
      <VisualData />
      <Footer />
    </Box>
  );
}

export default App;
