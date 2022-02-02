import { Box,Image,Flex, Text, Heading } from '@chakra-ui/react';

export default function Roadmap() {
  return (
    <Box pb="20px" position="relative">
      <Flex
        flexDirection="column"
        justifyContent="center"
        backgroundImage={`${process.env.PUBLIC_URL}/roadmapfull.svg`}
        backgroundPosition="center"
        backgroundSize="cover"
        h="100%"
        id="roadmap"
        position="relative"
        maxW="1220px"
        py="80px"
        mx="auto"
      >
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          w="500px"
          position="absolute"
          right="0"
          top="-8%"
          zIndex="5"
          display={{ base: 'none', md: 'block' }}
        >
          <Image w="350px" src={`${process.env.PUBLIC_URL}/planet.png`} />
        </Flex>
        <Heading
          className="rotated-heading"
          letterSpacing="14.4px"
          color="white"
          display={{ base: 'none', md: 'block' }}
        >
          THE META WARRIORS
        </Heading>

        <Flex
          flexDirection="column"
          position="relative"
          maxW="900"
          mx="auto"
          justifyContent="center"
          alignItems="center"
          backgroundImage={`${process.env.PUBLIC_URL}/images/roadmap.svg`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          pb="60px"
        >
          {/* <Image
            // top="0"
            minH="100%"
            position="absolute"
            src={`${process.env.PUBLIC_URL}/roadmap.svg`}
          /> */}

          <Flex
            position="relative"
            zIndex="5"
            px={{ base: '20px', md: '50px', lg: '90px' }}
            pt="65px"
            flexDirection="column"
          >
            <Box
              className="roadmap-moon"
              backgroundRepeat="no-repeat"
              backgroundImage={`${process.env.PUBLIC_URL}/moon.svg`}
            >
              <Heading
                color="white"
                fontSize="40px"
                textTransform="uppercase"
                letterSpacing="0.1em"
              >
                Roadmap
              </Heading>
            </Box>
            <Box>
              <Heading color="white" fontFamily="30px" letterSpacing="0.1em">
                0%
              </Heading>
              <Image
                mt="10px"
                mb="20px"
                src={`${process.env.PUBLIC_URL}/line1.svg`}
              />
              <Text mb="40px" color="white">
                WELCOME TO THE META WARRIORS!
                <br /> Get locked and loaded! Join the other Meta Warriors on
                our Discord and be ready for action! We will be giving away 5
                CUSTOM warriors to some lucky members on our Discord from
                Chapter 1 once we reach 20,000 members on Discord.
              </Text>
            </Box>

            <Box>
              <Heading color="white" fontFamily="30px" letterSpacing="0.1em">
                25%
              </Heading>
              <Image
                mt="10px"
                mb="20px"
                src={`${process.env.PUBLIC_URL}/line2.svg`}
              />
              <Text mb="40px" color="white">
                Airdrops / Giveaways
              </Text>
            </Box>

            <Box>
              <Heading color="white" fontFamily="30px" letterSpacing="0.1em">
                50%
              </Heading>
              <Image
                mt="10px"
                mb="20px"
                src={`${process.env.PUBLIC_URL}/line3.svg`}
              />
              <Text mb="40px" color="white">
                1 random verified holder from our first 5k minted will win a
                ZERO G Experience with the founders in Washington D.C
              </Text>
            </Box>

            <Box>
              <Heading color="white" fontFamily="30px" letterSpacing="0.1em">
                75%
              </Heading>
              <Image
                mt="10px"
                mb="20px"
                src={`${process.env.PUBLIC_URL}/line4.svg`}
              />
              <Text mb="40px" color="white">
                Purchase land in The Sandbox for verified Members ONLY
              </Text>
            </Box>

            <Box>
              <Heading color="white" fontFamily="30px" letterSpacing="0.1em">
                100%
              </Heading>
              <Image
                mt="10px"
                mb="20px"
                src={`${process.env.PUBLIC_URL}/line5.svg`}
              />
              <Text mb="40px" color="white">
                Announcement of Chapter 2 & Metaverse development will begin
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        zIndex="5"
        position="relative"
        maxW="1220px"
        mx="auto"
        px="30px"
        mt="120px"
        py={{ base: '30px', md: '60px' }}
        overflow="hidden"
      >
        <Image
          position="absolute"
          top="0"
          className="roadmap-2"
          opacity="0.2"
          src={`${process.env.PUBLIC_URL}/hj.svg`}
        />
        <Box maxW="830px" mx="auto">
          <Box
            backgroundRepeat="no-repeat"
            className="moonbg"
            pt="40px"
            backgroundImage={`${process.env.PUBLIC_URL}/moon.svg`}
          >
            <Heading
              mb="10px"
              color="white"
              fontSize={{ base: '30px', md: '40px' }}
              letterSpacing="0.1em"
            >
              DEVELOPMENT ROADMAP
            </Heading>
          </Box>
          <Text
            color="white"
            ffontSize={{ base: '14px', md: '20px' }}
            lineHeight="30px"
          >
            We are here to make sure your investment is highly profitable! To do
            this, we will be launching massive marketing campaigns after the
            launch to increase the floor price.
          </Text>

          <Heading
            py="20px"
            color="white"
            fontSize={{ base: '30px', md: '40px' }}
            letterSpacing="0.1em"
          >
            MARKETING CAMPAIGNS
          </Heading>
          <Text
            mb="10px"
            color="white"
            fontSize={{ base: '14px', md: '20px' }}
            lineHeight="30px"
          >
            We will be sending airdrops to influencers to keep the momentum
            going around The Meta Warriors. We want to make sure your collection
            of The Meta Warriors lasts a long time, and we believe the best way
            of doing this is by planning multiple advertising campaigns, even
            after the initial sale is over.
          </Text>

          <Heading
            py="20px"
            color="white"
            fontSize={{ base: '30px', md: '40px' }}
            letterSpacing="0.1em"
          >
            FUTURE META WARRIORS
          </Heading>
          <Text
            color="white"
            fontSize={{ base: '14px', md: '20px' }}
            lineHeight="30px"
          >
            Once the mint is near completion, we will start developing Chapter 2
            of the project, in which we will showcase the new collection to be
            rolled out at 100% mint completion.
          </Text>
          <Heading
            py="20px"
            color="white"
            fontSize={{ base: '30px', md: '40px' }}
            letterSpacing="0.1em"
          >
            COMMUNITY EMPOWERMENT
          </Heading>
          <Text
            color="white"
            fontSize={{ base: '14px', md: '20px' }}
            lineHeight="30px"
          >
            The opinions of The Meta Warriors are what matters to us most and
            will help us thrive! Every week, we will be holding polls in our
            Discord channel, for verified holders, to voice their opinions on
            important decisions regarding the future of our project
          </Text>
        </Box>
      </Flex>
      <Box
        maxW="300px"
        position="absolute"
        bottom="-6%"
        display={{ base: 'none', md: 'block' }}
      >
        <Image src={`${process.env.PUBLIC_URL}/bol.svg`} />
      </Box>
    </Box>
  );
}
