import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { LuArrowDownUp } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
const Sidenav = () => {
  const navlink = [
    {
      icon: <RxDashboard />,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: <LuArrowDownUp />,
      text: "Transaction",
      link: "/transaction",
    },

  ];
  return (
    <div>
      <Stack bg="white" justifyContent="space-between" boxShadow={{base:"none",lg:"lg"}} h={{base:"100vh",lg:"100vh",xl:"100vh"}} w={{base:"100%",lg:"15rem"}}>
        <Box>
          <Heading
            fontSize={"20px"}
            as={"h1"}
            pt={"3.5rem"}
            textAlign={"center"}
          >
            @OmPethani
          </Heading>
          <Box mt={"6"} mx={"3"}>
            {navlink.map((nav) => (
              <Link to={nav.link} key={nav.text}>
              <HStack
                py={"3"}
                px={"4"}
                color={"#797E82"}
                _hover={{
                  bg: "#F3E3F7",
                  color: "#171717",
                  borderRadius: "10px",
                
                }}
              >
                <Icon fontSize={"20px"}>{nav.icon}</Icon>
                <Text fontSize={"15px"} fontWeight="500">
                  {nav.text}
                </Text>
              </HStack>
              </Link>
            ))}
          </Box>
        </Box>

        <Box mt={"6"} mx={"3"} mb={"6"}>
         <Link to={"/support"}>
          <HStack
            py={"3"}
            px={"4"}
            color={"#797E82"}
            _hover={{
              bg: "#F3E3F7",
              color: "#171717",
              borderRadius: "10px",
            }}
          >
            <Icon fontSize={"20px"}>
              <BiSupport />
            </Icon>
            <Text fontSize={"15px"} fontWeight="medium">
              Support
            </Text>
          </HStack>
          </Link>
        </Box>
      </Stack>
    </div>
  );
};

export default Sidenav;
