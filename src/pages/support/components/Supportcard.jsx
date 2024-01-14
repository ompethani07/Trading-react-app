import {
    Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { AiTwotoneMessage } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
const Supportcard = ({Leftcomponent, title ,text ,icon}) => {
  return (
    <Flex gap={6} flexDir={{
        base:"column",
        xl:"row"
    }}>
      <Stack maxW={"23rem"}>
        <Icon as={icon} boxSize={7} color="p.purple" />
        <Text as="h1" textStyles="h1" fontWeight={"medium"} fontSize={"32px"}>
          {title}
        </Text>
        <Text textstyle="h2" color="black.60" fontSize={"sm"}>
          {text}
        </Text>
      </Stack>
      <Box w="full" maxW={"550px"}>
      {Leftcomponent}
      </Box>
    </Flex>
  );
};

export default Supportcard;
