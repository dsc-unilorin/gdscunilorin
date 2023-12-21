import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { peopleData } from "../../../data/index";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../provider/ThemeProvider";
export const CoreTeam = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedPeopleData = showAll ? peopleData : peopleData.slice(0, 8);

  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };

  const { currentTheme } = useContext(ThemeContext);
  const background = currentTheme.colors.background;
  const primaryColor = currentTheme.colors.primary;
  return (
    <Box paddingY={4} bg={background}>
      <Container>
        <Text
          fontSize="4xl"
          fontWeight="semibold"
          textAlign={["left", "center"]}
          textTransform={"uppercase"}
          marginY={"12"}
        >
          Core Team Members
        </Text>
      </Container>

      <Container maxW="container.lg">
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={8}
          justifyContent={"center"}
          alignContent={"center"}
        >
          {displayedPeopleData.map((person, index) => (
            <GridItem w="100%" h="auto" key={index} color={primaryColor}>
              <Image
                src={person.imageurl}
                alt={person.name}
                width={180}
                height={180}
                borderRadius={12}
              />
              <Box className="detailed_container" marginY={4}>
                <Text fontSize={"14"} fontWeight={"bold"}>
                  {person.fullName}
                </Text>
                <Text
                  className="small"
                  fontWeight="normal"
                  fontSize={"xx-small  "}
                  textAlign={"left"}
                  textTransform={"uppercase"}
                  marginY={"2"}
                >
                  {person.role}
                </Text>

                <HStack spacing={2} className="social_handle">
                  <Link href={person.socialLinks.twitter} target="_blank">
                    <Image
                      src={"/icons/twitter_icon.svg"}
                      width={4}
                      height={4}
                    />
                  </Link>
                  <Link href={person.socialLinks.linkedin} target="_blank">
                    <Image
                      src={"/icons/linkedin_icon.svg"}
                      width={4}
                      height={4}
                    />
                  </Link>
                  <Link href={person.socialLinks.dribbble} target="_blank">
                    <Image
                      src={"/icons/dribbble_icon.svg"}
                      width={4}
                      height={4}
                    />
                  </Link>
                </HStack>
              </Box>
            </GridItem>
          ))}
        </Grid>

        {showAll ? (
          <Center marginY={8}>
            <Button
              paddingX={12}
              paddingY={2}
              borderRadius={6}
              backgroundColor={"#34A853"}
              textColor={"#f4f4f4"}
              _hover={{ backgroundColor: "#120" }}
              onClick={handleViewAllClick}
            >
              Show Less
            </Button>
          </Center>
        ) : (
          <Center marginY={8}>
            <Button
              paddingX={12}
              paddingY={2}
              borderRadius={6}
              backgroundColor={"#34A853"}
              textColor={"#f4f4f4"}
              _hover={{ backgroundColor: "#120" }}
              onClick={handleViewAllClick}
            >
              View All
            </Button>
          </Center>
        )}
      </Container>
    </Box>
  );
};
