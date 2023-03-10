import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MainMenu = () => {
  const menuStyle = {
    justifyContent: "space-between",
    w: "260px",
    h: "46px",
    fontWeight: "semi-bold",
    textAlign: "left",
    bg: "#1C2031",
    _hover: {
      bg: "#1C2031",
    },
  };

  const menuList = {
    bg: "#1C2031",
    w: "264px",
    h: "30px",
    maxHeight: "2rem",
    overFlow: "scroll",
    px: "0",
    color: "#C6C7CB",
    py: "0",
    border: "none",
    _hover: {
      bg: "#1C2031",
    },
  };

  const menuItem = {
    bg: "#1C2031",
  };
  return (
    <Flex gap='20px' w='802px'>
      {/* button component */}
      <Menu>
        <MenuButton
          as={Button}
          sx={menuStyle}
          rightIcon={<ChevronDownIcon />}
          color="#C6C7CB"
        >
          Election Data
        </MenuButton>
        <MenuList sx={menuList}>
          <MenuItem sx={menuItem}>Pre-Election</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>Election Day Live Updates</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>Post-Election Analysis</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={Button}
          sx={menuStyle}
          rightIcon={<ChevronDownIcon />}
          color="#C6C7CB"
        >
          Presidential
        </MenuButton>
        <MenuList sx={menuList}>
          <MenuItem sx={menuItem}>Presidential</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>Gubernatorial</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>Senate</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>House of Representatives</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={Button}
          sx={menuStyle}
          rightIcon={<ChevronDownIcon />}
          color="#C6C7CB"
        >
          2023
        </MenuButton>
        <MenuList sx={menuList}>
          <MenuItem sx={menuItem}>2023</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>2019</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>2015</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>2011</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>2007</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>2003</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>1999</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>1995</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>1991</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>1987</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>1983</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>1979</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>1975</MenuItem>
          <MenuDivider m="0" color="#C6C7CB" />
          <MenuItem sx={menuItem}>1971</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default MainMenu;
