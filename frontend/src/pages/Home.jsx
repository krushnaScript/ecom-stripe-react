import { Box, Divider } from "@mui/material";
import NewArrivalComp from "../components/HomePageComp/NewArrivalComp";
import TopSelling from "../components/HomePageComp/TopSelling";
import BrowseStylesComp from "../components/HomePageComp/BrowseStylesComp";
import CustomerTestimonyComp from "../components/HomePageComp/CustomerTestimonyComp";

const Home = () => {
  return (
    <Box>
      <Box pb={6}>
        <NewArrivalComp />
      </Box>
      <Box textAlign="center" pb={6}>
        <Divider />
      </Box>
      <Box pb={6}>
        <TopSelling />
      </Box>
      <Box pb={6}>
        <BrowseStylesComp />
      </Box>
      <Box pb={6}>
        <CustomerTestimonyComp />
      </Box>
    </Box>
  );
};

export default Home;
