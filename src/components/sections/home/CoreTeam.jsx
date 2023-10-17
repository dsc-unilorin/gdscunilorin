import { Box, Button, Center, Container, Grid, GridItem, HStack, Image, Link, Text } from "@chakra-ui/react";
import { peopleData } from '../../../data/index';
import { useState } from "react";
export const CoreTeam = () =>
{
    const [ showAll, setShowAll ] = useState( false );
    const displayedPeopleData = showAll ? peopleData : peopleData.slice( 0, 8 );

    const handleViewAllClick = () =>
    {
        setShowAll( !showAll );
    };
    return (
        <Box paddingY={ 4 } backgroundColor={ "#E3F2FD" }>

            <Container>
                <Text fontSize="4xl" fontWeight="semibold" textAlign={ [ 'left', 'center' ] } textTransform={ "uppercase" } marginY={ "12" }>Core Team Members</Text>
            </Container>

            <Container maxW='container.lg'>
                <Grid templateColumns={ 'repeat(4, 1fr)' } gap={ 12 } justifyContent={ "center" }>

                    { displayedPeopleData.map( ( person, index ) => (
                        < GridItem w='100%' h='auto' key={ index } >
                            <Image src={ person.imageurl } alt={ person.name } width={ 180 } height={ 180 } borderRadius={ 8 } />
                            <Box className="detailed_container" marginY={ 6 }>
                                <Text>{ person.fullName }</Text>
                                <Text className="small" fontWeight="thin" fontSize={ 'xx-small  ' } textAlign={ 'left' } textTransform={ "uppercase" } marginY={ "2" }>{ person.role }</Text>

                                <HStack spacing={ 2 } className="social_handle">

                                    <Link href={ person.socialLinks.twitter } target="_blank"><Image src={ "/icons/twitter_icon.svg" } width={ 5 } height={ 5 } /></Link>
                                    <Link href={ person.socialLinks.linkedin } target="_blank"><Image src={ "/icons/linkedin_icon.svg" } width={ 5 } height={ 5 } /></Link>
                                    <Link href={ person.socialLinks.dribbble } target="_blank"><Image src={ "/icons/dribbble_icon.svg" } width={ 5 } height={ 5 } /></Link>
                                </HStack>

                            </Box>

                        </GridItem>


                    ) ) }

                </Grid>

                { showAll ? (
                    <Center marginY={ 8 }>
                        <Button
                            paddingX={ 12 }
                            paddingY={ 2 }
                            borderRadius={ 6 }
                            backgroundColor={ "#34A853" }
                            onClick={ handleViewAllClick }
                        >
                            Show Less
                        </Button>
                    </Center>
                ) : (
                    <Center marginY={ 8 }>
                        <Button
                            paddingX={ 12 }
                            paddingY={ 2 }
                            borderRadius={ 6 }
                            backgroundColor={ "#34A853" }
                            onClick={ handleViewAllClick }
                        >
                            View All
                        </Button>
                    </Center>
                ) }
            </Container>

        </Box>
    );
};