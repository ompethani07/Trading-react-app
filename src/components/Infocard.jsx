import React from 'react'
import { Customcard } from '../chkra/Customcard'
import { Tag, Text } from '@chakra-ui/react'

const Infocard = ({Imgurl , tagtext,text ,inverted}) => {
  return (
    <Customcard mb={inverted?6:0}
    bgColor={inverted?"p.purple":"white"}
    bgImage={Imgurl}
    bgSize={"cover"}
    bgRepeat={"no-repeat"}
    >
    <Tag bg={inverted?"white":"p.purple"} color={inverted?"p.purple":"white"} borderRadius={"full"} fontWeight={"500"}>
        {tagtext}
    </Tag>
    <Text textStyle="h5" mt={5} fontWeight={"medium"} color={inverted?"white":"black"}>
        {text}
    </Text>
    </Customcard>
  )
}

export default Infocard
