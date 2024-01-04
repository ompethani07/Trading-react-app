import React from "react";
import { Customcard } from "../../../chkra/Customcard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
const PriceSection = () => {
  const time = ["7.12 PM", "3.12 PM", "8.12 PM", "1.12 PM", "4.12 PM"];

  return (
    <Customcard>
      <Flex justifyContent={"space-between"} align={"start"}>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack
            spacing={{
              base: 3,
              sm: 5,
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
              <HStack fontWeight={"bold"} color={"green.500"}>
                <Icon as={BsArrowUpRight} />
                <Text fontSize={"sm"} fontWeight={"medium"}>
                  22%
                </Text> 
              </HStack>
            </HStack>
          </HStack>
        </Stack>

        <HStack mt={{ base: "2" }}>
          <Button leftIcon={<Icon as={FaPlusCircle} fontSize={"15px"}/>}>
            Buy
          </Button>
          <Button leftIcon={<Icon as={FaCircleMinus} fontSize={"15px"} />}>
            Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
       <Flex justify={"end"}>
       <TabList bg={"black.5"} p={"3px"} mt={2}>
        {
          ["1H","1D","1W","1M"].map((tab)=>
          <Tab key={tab} _selected={{ bg:"white" }} fontSize={"sm"} borderRadius={4} px="2" py="1">{tab}</Tab>
          )
        }
        </TabList>
       </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="graph.svg" width={"100%"} mt={"3rem"} />
            <HStack justifyContent={"space-between"}>
              {time.map((timestamp) => (
                <Text key={timestamp} fontSize={"sm"} color={"black.80"}>
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Customcard>
  );
};

export default PriceSection;
