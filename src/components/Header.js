import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Link,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
  Heading,
} from '@chakra-ui/react';
import { HiMenu } from 'react-icons/hi';

import { shortenAddress } from '../candy-machine';

export default function Header({ address, onConnect }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = React.useState('right');

  return (
    <>
      <Box px={{ base: '15px', xl: 0 }} py={{ base: '20px', md: '45px' }}>
        <Flex
          maxW="1220px"
          mx="auto"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/" className="link" maxW={{ base: '150px', md: '300px' }}>
            <Image src={`${process.env.PUBLIC_URL}/images/header-logo.svg`} />
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
            <Link
              fontSize="20px"
              href="#about"
              className="link"
              mr="30px"
              color="white"
            >
              About
            </Link>
            <Link
              fontSize="20px"
              href="#roadmap"
              className="link"
              mr="30px"
              color="white"
            >
              Roadmap
            </Link>

            <Link
              fontSize="20px"
              href="#team"
              className="link"
              color="white"
              mr="30px"
            >
              Team
            </Link>
            <Link
              fontSize="20px"
              href="#faq"
              className="link"
              mr="50px"
              color="white"
            >
              FAQ
            </Link>
            {!address ? (
              <Flex
                as="button"
                bg="white"
                width="210px"
                h="62px"
                borderRadius="10px"
                justifyContent="center"
                alignItems="center"
                className="desktop-btn"
                display={{ base: 'none', lg: 'flex' }}
                onClick={onConnect}
              >
                <Text
                  fontSize="20px"
                  fontWeight="bold"
                  bgGradient="linear(to-l, gr1, gr2, gr3)"
                  bgClip="text"
                >
                  Connect Wallet
                </Text>
              </Flex>
            ) : (
              <Flex
                bg="white"
                width="210px"
                h="62px"
                borderRadius="10px"
                justifyContent="center"
                alignItems="center"
                display={{ base: 'none', lg: 'flex' }}
              >
                <Text
                  fontSize="20px"
                  fontWeight="bold"
                  bgGradient="linear(to-l, gr1, gr2, gr3)"
                  bgClip="text"
                >
                  {shortenAddress(address || '')}
                </Text>
              </Flex>
            )}
          </Flex>

          <Box
            as="button"
            p="2"
            onClick={onOpen}
            display={{ base: 'block', md: 'none' }}
          >
  
            <Image onClick={onOpen} zIndex={22222} src={`${process.env.PUBLIC_URL}/images/hamburger.svg`} />
          </Box>
        </Flex>
      </Box>
      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        display={{ base: 'block', md: 'none' }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody bg="drawer" pt="100px" px="40px">
            <Box
              as="box"
              onClick={onClose}
              position="absolute"
              right="24px"
              top="38px"
            >
              <Image src={`${process.env.PUBLIC_URL}/images/close.svg`} />
            </Box>
            <Image src={`${process.env.PUBLIC_URL}/images/header-logo.svg`} />
            <Link
              href="#about"
              className="link"
              display="block"
              color="white"
              fontSize="16px"
              textAlign="center"
              py="20px"
            >
              About
            </Link>
            <Link
              href="#roadmap"
              className="link"
              display="block"
              color="white"
              fontSize="16px"
              textAlign="center"
              py="20px"
            >
              Roadmap
            </Link>
            <Link
              href="#gallery"
              className="link"
              display="block"
              color="white"
              fontSize="16px"
              textAlign="center"
              py="20px"
            >
              Gallery
            </Link>

            <Link
              href="#team"
              display="block"
              className="link"
              color="white"
              fontSize="16px"
              textAlign="center"
              py="20px"
            >
              Team
            </Link>

            {!address ? (
              <Flex
                as="button"
                bg="white"
                w="100%"
                h="62px"
                borderRadius="10px"
                justifyContent="center"
                alignItems="center"
                onClick={onConnect}
                mt="40px"
              >
                <Text
                  fontSize="20px"
                  fontWeight="bold"
                  bgGradient="linear(to-l, gr1, gr2, gr3)"
                  bgClip="text"
                >
                  Connect Wallet
                </Text>
              </Flex>
            ) : (
              <Flex
                bg="white"
                w="100%"
                h="62px"
                borderRadius="10px"
                justifyContent="center"
                alignItems="center"
                mt="40px"
              >
                <Text
                  fontSize="20px"
                  fontWeight="bold"
                  bgGradient="linear(to-l, gr1, gr2, gr3)"
                  bgClip="text"
                >
                  {shortenAddress(address || '')}
                </Text>
              </Flex>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
