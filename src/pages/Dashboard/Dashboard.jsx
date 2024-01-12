import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import Portfoliosection from "./components/Portfoliosection";
import PriceSection from "./components/PriceSection";
import Transcition from "./components/Transcition";
import Infocard from "../../components/Infocard";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout title="Dashboard">
        <Grid gridTemplateColumns={
          {
            base: "repeat(1, 1fr)",
            xl: "repeat(2, 1fr)",
          }
        }
        gap={6}
        >
          <GridItem colSpan={{base:1,xl:2}}>
            <Portfoliosection />
          </GridItem>
          <GridItem colSpan={1}>
            <PriceSection />
          </GridItem>
          <GridItem colSpan={1}>
            <Transcition />
          </GridItem>
          <GridItem colSpan={1}>
            <Infocard Imgurl="dot_bg.svg" tagtext="Loans"
            inverted={false}
              text="Learn more about Loans - Keep your Bitcoin it's value without Selling it"/>
          </GridItem>
          <GridItem colSpan={1}>
            <Infocard Imgurl="/grid_bg.svg" 
            inverted={true}
            tagtext="Contacts"
              text="You can call us and get fast replies 24x7 we are always there hurry up!"
            />
          </GridItem>
        </Grid>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
