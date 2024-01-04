import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import Portfoliosection from "./components/Portfoliosection";
import PriceSection from "./components/PriceSection";
import Transcition from "./components/Transcition";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout title="Dashboard">
        <Grid gridTemplateColumns={
          {
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }
        }
        gap={6}>
          <GridItem colSpan={2}>
            <Portfoliosection />
          </GridItem>
          <GridItem colSpan={1}>
            <PriceSection />
          </GridItem>
          <GridItem colSpan={1}>
            <Transcition />
          </GridItem>
        </Grid>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
