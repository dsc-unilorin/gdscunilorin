import HeaderNavigation from "./Header";
import { Box } from "@chakra-ui/react";
import './footerstyles.css';


const Layout = ({ children }) => {
  return (
    <>
      <HeaderNavigation />
      <Box px={4}>{children}</Box>
    </>
  );
};

export default Layout;
