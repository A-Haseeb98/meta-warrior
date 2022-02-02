import {Flex,Heading,Text  } from '@chakra-ui/react';
export default function Mint() {
  return (
    <Flex
      position="relative"
      zIndex="5"
      py="50px"
      w="100%"
      h={{ base: '100%', md: '350px' }}
      bgGradient="linear(to-r, gr1, gr2, gr3 )"
    >
      <Flex
        px="50px"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        maxW="1220px"
        mx="auto"
      >
        <Heading
          fontSize={{ base: '36px', md: '60px' }}
          letterSpacing="1.6px"
          color="white"
          textAlign={{ base: 'center', md: 'left' }}
          mb={{base: '30px', md: 0}}
        >
          LET’S COLLECT <br /> YOUR WARRIORS
        </Heading>
        <Flex
          as="button"
          w="250px"
          h="65px"
          borderRadius="10px"
          bg="white"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            bgGradient="linear(to-l, gr1, gr2, gr3)"
            bgClip="text"
            fontSize="20px"
            fontWeight="bold"
          >
            MINT NOW
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
