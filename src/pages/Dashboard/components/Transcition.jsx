import React, { Fragment } from 'react'
import { Customcard } from "../../../chkra/Customcard";
import { Box, Button, Divider, Flex, Grid, Icon, Stack, Text } from '@chakra-ui/react';
import { FaBtc, FaRupeeSign } from 'react-icons/fa';
const Transcition = () => {
  const Transcitions=[
    {
      id:"1",
      icon:FaRupeeSign,
      text:"INR deposit",
      amount:"+81,213.10",
      timestamp:"2024-01-01 7:13 PM"
    },
    {
      id:"2",
      icon:FaBtc,
      text:"BTC sell",
      amount:"-12.18623.6",
      timestamp:"2023-04-01 9:13 AM"
    },
    {
      id:"3",
      icon:FaRupeeSign,
      text:"INR deposit",
      amount:"+81,213.10",
      timestamp:"2024-01-01 7:13 PM"
    }
  ]
  return (
    <Customcard h={"full"}>
      <Text color="black.80" fontSize={"sm"} mb={6}>Recent Transcition</Text>
      <Stack gap={4}>
      {Transcitions.map((trans,i)=>
      <Fragment  key={trans.id}>
      {i !=0 && <Divider/>}
      <Flex gap={4}>
      <Grid bg={"black.5"} placeItems={"center"} boxSize="10" borderRadius="full">
        <Icon as={trans.icon}/>
      </Grid>
      <Flex justifyContent={"space-between"} w={"full"}>
      <Stack spacing={0}>
        <Text textStyle={"h6"}>{trans.text}</Text>
        <Text fontSize={"sm"} color={"black.40"}>{trans.timestamp}</Text>
      </Stack>
      <Text textStyle={"h6"}>{trans.amount}</Text>
      </Flex>
      </Flex>
      </Fragment>
      
      )}
      </Stack>
      <Button w={"full"} colorScheme='gray' mt={7}>View All</Button>
    </Customcard>
  )
}

export default Transcition

