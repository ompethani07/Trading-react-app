import { Card, Stack } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Supportcard from "./components/Supportcard";
import Contactcard from "./components/Contactcard";
import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import Infocard from "../../components/Infocard";
const Support = () => {
  return (
    <DashboardLayout title={"Support"}>
     <Stack spacing={8} h="screen">
     <Supportcard
        Leftcomponent={<Contactcard />}
        title="Contact Us"
        text="Have a Question or want to know more ? Feel free to reach out to us"
        icon={IoMdMail}
      />

      <Supportcard
        Leftcomponent={
          <Infocard
            Imgurl="/grid_bg.svg"
            inverted={true}
            tagtext="Contacts"
            text="You can call us and get fast replies 24x7 we are always there hurry up!"
          />
        }
        title="Live Chat"
        text="Don't have time to wait for answer ? Live chat now with us "
        icon={AiTwotoneMessage}
      />
     </Stack>
    </DashboardLayout>
  );
};

export default Support;
