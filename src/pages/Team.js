import { Flex,Box, Image,  Heading } from '@chakra-ui/react';
import TeamCard from '../components/TeamCard';

export default function About() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      py="120px"
      id="team"
      px={{ base: '20px', md: 0 }}
      position="relative"
      overflow="hidden"
    >
      <Image
        position="absolute"
        left={{ base: '-150px', md: '0' }}
        bottom={{ base: '55%', md: '-210px' }}
        maxW={{ base: '800px', md: '461px' }}
        src={`${process.env.PUBLIC_URL}/sun.svg`}
      />
      <Image
        position="absolute"
        right="0"
        top={{ base: '150px', md: '0' }}
        maxW={{ base: '200px', md: '454px' }}
        mx="auto"
        src={`${process.env.PUBLIC_URL}/biground.svg`}
      />
      <Box maxW="1220px" mx="auto" w="100%">
        <Box
          backgroundRepeat="no-repeat"
          // backgroundSize="101px"
          className="moonteam"
          w="100%"
          backgroundImage={`${process.env.PUBLIC_URL}/moon.svg`}
          py="50px"
        >
          <Heading
            color="white"
            fontSize="40px"
            fontWeight="bold"
            letterSpacing="0.1em"
          >
            Team
          </Heading>
        </Box>

        <Flex
          justifyContent={{ base: 'center', md: 'space-between' }}
          alignItems="center"
          flexWrap="wrap"
        >
          <TeamCard
            name="Ajrealestate"
            image="teama.svg"
            position="Founder | President"
          />
          <TeamCard
            name="CryptoGage"
            image="teamb.svg"
            position="Founder | President"
          />
          <TeamCard
            name="Trocke"
            image="teamc.svg"
            position="Community Manager"
          />
          <TeamCard
            name="DonnyPineapples"
            image="teamd.svg"
            position="Community Manager"
          />
        </Flex>
      </Box>
    </Flex>
  );
}
