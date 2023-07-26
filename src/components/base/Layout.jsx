import HeaderNavigation from "./Header";
import { Box } from "@chakra-ui/react"

const Layout = ({ children }) => {
    return (
        <>
        <HeaderNavigation />
        <Box  px={4}>{children}</Box>
        <Box px={4}>
            GDSC Unilorin
        </Box>
        </>
    )
}

export default Layout;