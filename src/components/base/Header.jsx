"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Image,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";

const Links = ["Home", "About Us", "Events", "FAQs"];

const NavLink = (props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={"44px"}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function HeaderNavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleTheme, currentTheme } = useContext(ThemeContext);
  const background = currentTheme.colors.background;
  const primaryColor = currentTheme.colors.primary;

  return (
    <>
      <Box px={4} py={"32px"} bg={background}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          paddingX={"20px"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            padding={"10px"}
            borderRadius={"8px"}
            onClick={isOpen ? onClose : onOpen}
            bg={primaryColor}
          />
          <HStack spacing={8} alignItems={"center"} mx={{ base: 2, sm: 0 }}>
            <Box>
              <Image
                src="./../../src/assets/gdsclogo.png"
                alt="GDSC Unilorin Logo"
              />
            </Box>
          </HStack>
          <HStack
            spacing={8}
            alignItems={"center"}
            display={{ base: "none", md: "flex" }}
            bg={primaryColor}
            padding={"20px 38px"}
            borderRadius={"30px"}
          >
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              gap="10px"
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              bg={primaryColor}
              onClick={() => toggleTheme()}
              padding={"10px"}
              borderRadius={"8px"}
            >
              {currentTheme === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
