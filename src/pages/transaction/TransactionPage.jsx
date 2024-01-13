import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { IoMdDownload } from "react-icons/io";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Transactinrable from "./components/Transactinrable";
import { IoSearchSharp } from "react-icons/io5";

const TransactionPage = () => {
  const tabbs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];
  return (
    <DashboardLayout title={"Transaction"}>
      <Flex justify={"flex-end"} mt={6} mb={3}>
        <Button leftIcon={<IoMdDownload />}>EXPORT CSV</Button>
      </Flex>
      <Card borderRadius={"1rem"}>
        <Tabs>
          <TabList pt={3} px={2} display={"flex"} justifyContent={"space-between"}>
          <HStack>
            {tabbs.map((tab) => (
              <Tab key={tab.name} display={"flex"} gap={2} pb={4}>
                {tab.name}{" "}
                <Tag colorScheme="gray" borderRadius={"full"}>
                  {tab.count}
                </Tag>
              </Tab>
            ))}
          </HStack>

            <InputGroup maxW={"200px"} pr={2}>
              <InputLeftElement pointerEvents="none">
                <Icon as={IoSearchSharp} fontSize={18}/>
              </InputLeftElement>
              <Input type="tel" placeholder="Search by ID or Name" />
            </InputGroup>


          </TabList>
          <TabPanels>
            <TabPanel>
              <Transactinrable />
            </TabPanel>
            <TabPanel>
              <Transactinrable />
            </TabPanel>
            <TabPanel>
              <Transactinrable />
            </TabPanel>
            <TabPanel>{/* <Transactinrable/> */}</TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
