import React from "react";
import {
    Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
const Contactcard = () => {
  return (
    <Card p={6} borderRadius={"1rem"} flexGrow={1}>
      <Stack spacing={4}>
        <Text fontWeight={"medium"} fontSize={"sm"}>
          You will receive reponse within 24 hours of submit.{" "}
        </Text>

        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Enter Your First Name...." />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Enter Your Last Name...." />
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="name@xyz.com" />
        </FormControl>

        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter Your Message..." />
        </FormControl>
        <Checkbox>
          <Text fontSize={"xs"}>
            I agree with
            <Box as="span" fontSize={"sm"} color={"p.purple"} ml={1}>
              Terms & Conditions
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize={"small"}>Send a Message</Button>
          <Button fontSize="small" colorScheme={"gray"} fontWeight={600}>
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default Contactcard;
