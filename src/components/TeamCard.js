import { Flex, Heading, Image, Text, Box } from '@chakra-ui/react';
export default function TeamCard({ image, name, position ="" }) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w={{ base: '100%', md: '50%', lg: '22%' }}
      mb="30px"
    >
      <Flex justifyContent="center" position="relative" w="100%">
        <Image src={`${process.env.PUBLIC_URL}/${image}`} maxW="100%" />
      </Flex>
      <Flex
        position="relative"
        zIndex="1"
        flexDirection="column"
        w="100%"
        alignItems="center"
        borderRadius="10px"
        mt="-15px"
        py="30px"
        maxW="275px"
        bgGradient="linear(to-r, gr1, gr2, gr3 )"
      >
        <Heading
          fontSize="20px"
          color="white"
          fontFamily="body"
          fontWeight="bold"
          mb="10px"
        >
          {name}
        </Heading>
        {position && <Text color="white" fontSize="16px">{position}</Text>}
      </Flex>
    </Flex>
  );
}
