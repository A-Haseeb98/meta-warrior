import { Flex, Text, Heading, Image, Box } from '@chakra-ui/react';

export default function About() {
  return (
    <Flex
      maxW="1220px"
      mx="auto"
      flexDirection="column"
      alignItems="center"
      id="about"
      py={{ base: '30px', md: '80px' }}
      pt="80px"
      px={{ base: '10px', md: 0 }}
    >
      <Flex
        alignItems="center"
        mb="50px"
        w="100%"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box position="relative" mx="auto" maxW="550px">
          <Image
            src={`${process.env.PUBLIC_URL}/images/about-circle.svg`}
            className="circle-about"
          />
          <Image
            src={`${process.env.PUBLIC_URL}/images/about-middle-new.png`}
            className="center-ab"
          />
          <Image
            src={`${process.env.PUBLIC_URL}/images/about-circle-top.png`}
            className="circle-top-ab"
          />
          <Image
            src={`${process.env.PUBLIC_URL}/images/about-circle-bottom.png`}
            className="circle-bot-ab"
          />
        </Box>
        <Box
          ml={{ base: 0, md: '50px' }}
          mt={{ base: '80px', md: 0 }}
          backgroundRepeat="no-repeat"
          backgroundImage={`${process.env.PUBLIC_URL}/moon.svg`}
          className="about-moon"
          px={{ base: '20px', md: 0 }}
        >
          <Heading
            color="white"
            mb="20px"
            textAlign="left"
            fontSize="40px"
            letterSpacing="0.1em"
          >
            ABOUT
          </Heading>
          <Text
            mb="50px"
            maxW="480px"
            minW="300px"
            mx="auto"
            textAlign="justify"
            color="white"
            fontSize="20px"
          >
            The Meta Warriors are a group of warriors in the Metaverse. With
            each new chapter, a new diverse group of warriors are born! Chapter
            1, with our Space Warriors, is just the beginning, but Chapter 2
            will be completely different! You won’t want to miss out on any of
            our chapters to come! Are you ready to be a warrior in the
            Metaverse?
          </Text>
          <Box
            as="button"
            bg="transparent"
            // className="borderbtn"
            mr={{ base: 0, md: '200px' }}
            width="275px"
            h="82px"
            color="white"
            borderRadius="5px"
            justifyContent="center"
            alignItems="center"
            // className="desktop-btn"
            backgroundImage={`${process.env.PUBLIC_URL}/images/mint-btn-frame.svg`}
            backgroundSize="cover"
            ml="-25px"
          >
            <Text fontSize="20px" fontWeight="bold" mt="10px">
              MINT NOW
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
