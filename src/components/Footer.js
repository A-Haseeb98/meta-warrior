import { Box, Flex, Link, Text,Image, Heading } from '@chakra-ui/react';

import { FiTwitter,  } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';


export default function Footer() {
  return (
    <Flex
      backgroundImage={`${process.env.PUBLIC_URL}/footer1.svg`}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      backgroundSize={{ base: '300%', md: 'cover' }}
      py={{ base: '30px', md: '112px' }}
      px="20px"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Image maxW="118px" src={`${process.env.PUBLIC_URL}/footerlogo.svg`} />
      <Text my="24px" color="white" fontSize="20px">
        THE META WARRIORS
      </Text>
      <Text mb="50px" color="white" fontSize="20px">
        All Rights Reserved 2021
      </Text>

      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mx="auto"
      >
        <Flex>
          <Link
            href="https://discord.com/invite/NYxfwa2xeN"
            className="link"
            isExternal
            color="bgLight"
            mr="30px"
          >
            <SiDiscord size="50" />
          </Link>

          <Link
            href="https://twitter.com/themetawarriors"
            className="link"
            isExternal
            color="bgLight"
            mr="30px"
          >
            <AiOutlineTwitter size="50" />
          </Link>
          <Link
            href="https://www.instagram.com/themetawarriors/"
            className="link"
            isExternal
            color="bgLight"
            mr="30px"
          >
            <AiFillInstagram size="50" />
          </Link>
          <Link
            href="https://opensea.io/collection/themetawarriors"
            className="link"
            isExternal
            color="bgLight"
            mr="30px"
            w="50px"
          >
            <Image src={`${process.env.PUBLIC_URL}/opensea.svg`} />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
