import { Box } from "@chakra-ui/react";
import Layout from "../components/base/Layout";
import { CoreTeam } from "../components/sections/home/CoreTeam";
import { FAQ } from "../components/sections/home/Faq";
import Footer from "../components/base/footer";
function Homepage() {
  return (
    <>
      <Layout>
        <Box p={4}>Main Content Here</Box>
        <CoreTeam />
        <FAQ />
        <Footer/>
      </Layout>
    </>
  );
}

export default Homepage;
