import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
const Portfoliosection = () => {
  return (
    <HStack
      bg="white"
      justify="space-between"
      borderRadius="xl"
      p="6"
      spacing={15}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      align={{
        base: "flex-start",
        xl: "center",
      }}
    >
      <HStack
        spacing={{
          base: 4,
          xl: "16",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={FaInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight={"medium"}>
            ₹112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack
            spacing={{
              base:3,
              sm:5
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
            align={{
              base: "flex-start",
              xl: "center",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight={"medium"}>
                22.39401000
              </Text>
              <Tag colorScheme="gray" fontWeight={"medium"}>
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight={"medium"}>
                ₹1,300.00
              </Text>
              <Tag colorScheme="gray" fontWeight={"medium"}>
                INR
              </Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack mt={{ base: "2" }}>
        <Button leftIcon="<Icon as={FaArrowDownLong} fontSize={'15px'}/>">
          Deposit
        </Button>
        <Button leftIcon={<Icon as={FaArrowUpLong} fontSize={"15px"} />}>
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default Portfoliosection;
