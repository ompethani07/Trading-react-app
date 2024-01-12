import { Box, Container, Flex, calc, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Sidedrawer from "./Sidedrawer";

const DashboardLayout = ({ title ,children}) => {
    const {isOpen,onClose,onOpen}= useDisclosure();
    return (
    <Flex maxW={{base:"100%", xl:"full"}}>
    <Box display={{base:"none",lg:"flex"}}>
      <Sidenav/>
    </Box>
      <Sidedrawer isOpen={isOpen} onClose={onClose}/>
      <Box flexGrow={"1"}>
        <Topnav title={title} onOpen={onOpen}/>
        <Container mt="6" maxW="65rem" overflowX={"hidden"} overflowY={"hidden"} h="calc(100vh-80px)">
        {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
