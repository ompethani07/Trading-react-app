import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
const Topnav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack h="16" justifyContent={"space-between"} maxW="60rem" mx="auto">
        <Icon
          as={TiThMenu}
          onClick={onOpen}
          display={{ base: "block", lg: "none" }}
          cursor={"pointer"}
          _hover={{ bg: "#F3E3F7", color: "#171717", borderRadius: "50px" }}
        />
        <Heading fontWeight={"medium"} fontSize={"28px"}>
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaCircleUser} fontSize={"36px"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
