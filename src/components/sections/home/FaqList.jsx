import { React, useContext, useState } from "react";
import { Box, Text, Image } from "@chakra-ui/react";

import { faqs } from "../../../data/faq";
import { ThemeContext } from "../../../provider/ThemeProvider";

export const FaqList = () => {
  const [click, setClick] = useState(null);
  const [clicked, setClicked] = useState(false);

  const { currentTheme } = useContext(ThemeContext);
  const background = currentTheme.colors.background;
  const primaryColor = currentTheme.colors.primary;

  const handleClick = (id) => {
    setClicked(!clicked);
    clicked ? setClick(id) : setClick(null);
  };

  const styles = {
    drop: {
      display: "flex",
      width: "660px",
      height: "60px",
      padding: "10.598px 21.197px",
      alignItems: "center",
      gap: "494px",
      borderRadius: "5.299px",
    },
  };
  const listItems = faqs.map((faq) => (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flexStart",
        gap: "4px",
      }}
      key={faq.id}
      onClick={() => handleClick(faq.id)}
    >
      <Box
        style={{
          ...styles.drop,
          border: click === faq.id ? "none" : "1px solid #4285F4",
          // background: click === faq.id ? "#4285F4" : "inherit",
          background: primaryColor,
        }}
        display={"flex"}
      >
        <Text style={{ textWrap: "nowrap" }}>{faq.question}</Text>
        {click === faq.id ? (
          <Image
            src="./../../src/assets/chevron-down.svg"
            alt="Chevron Down"
          ></Image>
        ) : (
          <Image
            src="./../../src/assets/chevron-right.svg"
            alt="Chevron Right"
          ></Image>
        )}
      </Box>
      {click === faq.id ? (
        <Box
          display={"flex"}
          width={"660px"}
          height={"68px"}
          padding={"18px 22px 18px 30px"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          borderRadius={"5.299px"}
          background={background}
        >
          <Text
            fontFamily={"Open Sans"}
            lineHeight={"15.898px"}
            fontWeight={400}
            fontSize={"10.598px"}
            color={primaryColor}
          >
            Lorem ipsum dolor sit amet consectetur. Commodo ac sed vitae risus
            dui quisque. Venenatis placerat faucibus rutrum viverra. Egestasn
            ulla porta dictum at a. Urna etiam nulla arcu parturient. Lorem
            ipsum dolor sit amet cons
          </Text>
        </Box>
      ) : null}
    </li>
  ));
  return <>{listItems}</>;
};
