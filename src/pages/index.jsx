import { Box } from '@chakra-ui/react';
import Layout from '../components/base/Layout';
import { CoreTeam } from '../components/sections/home/CoreTeam';
function Homepage ()
{

  return (
    <>
      <Layout>
        <Box p={ 4 }>Main Content Here</Box>
        <CoreTeam />
      </Layout>
    </>
  );
}

export default Homepage;
