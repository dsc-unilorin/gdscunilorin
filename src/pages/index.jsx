import { Box } from "@chakra-ui/react";
import Layout from "../components/base/Layout";
import { CoreTeam } from "../components/sections/home/CoreTeam";
import { FAQ } from "../components/sections/home/Faq";
function Homepage() {
  return (
    <>
      <Layout>
        <Box p={4}>Main Content Here</Box>
        <CoreTeam />
        <FAQ />
      </Layout>
    </>
  );
}

export default Homepage;
