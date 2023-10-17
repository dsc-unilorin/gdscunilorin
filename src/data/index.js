import { faker } from '@faker-js/faker';

const generateRandomSocialLinks = () => ( {
    twitter: `https://twitter.com/${ faker.internet.userName() }`,
    linkedin: `https://www.linkedin.com/in/${ faker.internet.userName() }`,
    dribbble: `https://dribbble.com/${ faker.internet.userName() }`,
} );

const generateRandomPerson = () => ( {
    imageurl: faker.image.avatar(),
    fullName: faker.person.fullName(),
    role: faker.person.jobTitle(),
    socialLinks: generateRandomSocialLinks(),
} );

const generateRandomPeopleArray = ( count ) =>
{
    const peopleArray = [];
    for ( let i = 0; i < count; i++ )
    {
        peopleArray.push( generateRandomPerson() );
    }
    return peopleArray;
};

export const peopleData = generateRandomPeopleArray( 10 );
