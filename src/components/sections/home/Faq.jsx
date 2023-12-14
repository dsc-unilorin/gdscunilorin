import React from "react";
import { Flex, Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { FaqList } from "./FaqList";
export const FAQ = () => {
  return (
    <Flex
      justify={"flex-end"}
      flexDirection={"column-reverse"}
      align={"center"}
      padding={"110px 55px 53px 70px"}
      bg={useColorModeValue("#E3F2FD", "#4285F407")}
    >
      <Box
        display={"flex"}
        flexDirection={"column-reverse"}
        width={"100%"}
        height={"690px"}
      >
        <Box
          display={"flex"}
          width={"216px"}
          height={"60px"}
          padding={"16px 40px"}
          justifyContent={"center"}
          alignItems={"center"}
          alignSelf={"center"}
          gap={"12px"}
          flexShrink={0}
          borderRadius={"8px"}
          background={"#FFC107"}
          cursor={"pointer"}
        >
          {/* <Image
          src="./../../src/assets/chevron-right.svg"
          alt="Chevron Right"
        ></Image> */}
          <Text
            fontFamily={"Open Sans"}
            lineHeight={"24px"}
            fontWeight={700}
            fontSize={"16px"}
            color={"#28374B"}
          >
            View All
          </Text>
          {/* <Image
          src="./../../src/assets/chevron-right.svg"
          alt="Chevron Right"
        ></Image> */}
        </Box>
        <Box
          display={"inline-flex"}
          flexDirection={"column"}
          align={"flex-start"}
          gap={"41px"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"675px"}
            height={"104px"}
            align={"flex-start"}
          >
            <Text
              fontFamily={"Open Sans"}
              lineHeight={"96px"}
              fontWeight={700}
              fontSize={"48px"}
              color={useColorModeValue("#1F1F1F", "#fff")}
            >
              Frequently Asked Questions
            </Text>
            <Box
              borderRadius={"0 5px 5px 0"}
              width={"276px"}
              backgroundColor={"#FFC221"}
              height={"8px"}
            />
          </Box>
          <Box width={"100%"} display={"flex"} align={"center"}>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "15px",
              }}
            >
              <FaqList />
            </ul>
            <Box width={"655px"} height={"436.234px"}>
              <Image
                src="./../../src/assets/background-01-1536x1023.png"
                alt="FAQ Image"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
