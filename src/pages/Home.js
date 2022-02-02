import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Text, Heading, Input } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import Countdown from "./countdown";

import { CountCard } from '../components';
import { Header} from '../components';

export default function Home({data, onConnect, address, onMint}) {
  const [count, setCount] = useState(1);
  const { maxSupply, totalSupply, maxMintAmount, cost, loading } = data;




  return (
    <Box
      bg="black"
      position="relative"
      backgroundImage={`${process.env.PUBLIC_URL}/homebg1.svg`}
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Header onConnect={onConnect} address={address} />
      <Box maxW="1220px" mx="auto" position="relative" zIndex="5">
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'flex-start', md: 'space-between' }}
          alignItems="center"
          h="100%"
          overflow="hidden"
        >
          <Flex
            flex="1"
            w="100%"
            flexDirection="column"
            justifyContent="center"
          >
            <div style={{width:"100%", height:"30vh",border:"0px solid black", textAlign:"center", marginTop:"0px", fontSize:"100px", color:"white"}}>
            {/* <CountCard text={date}/> */}
            <Countdown />
            </div>
            <Box
              backgroundRepeat="no-repeat"
              backgroundImage={`${process.env.PUBLIC_URL}/moon.svg`}
              className="title-main"
              pr={{ base: '0', md: '20px' }}
              px={{ base: '20px', md: 0 }}
            >
            
            

              <Heading
                color="white"
                fontSize={{ base: '36px', md: '60px' }}
                letterSpacing="0.1em"
              >
                WELCOME TO
              </Heading>
              <Heading
                color="bc"
                fontSize={{ base: '36px', md: '60px' }}
                letterSpacing="0.1em"
              >
                THE META
              </Heading>
              <Image
                ml="-15px"
                mt="-5px"
                src={`${process.env.PUBLIC_URL}/text.svg`}
                maxW={{ base: '282px', md: '380px' }}
              />
            </Box>
            <Flex
              as="button"
              bg="transparent"
              className="borderbtn"
              width={{ base: '190px', md: '275px' }}
              h={{ base: '58px', md: '82px' }}
              color="white"
              borderRadius="5px"
              justifyContent="center"
              alignItems="center"
              onClick={onConnect}
              ml={{ base: 0, md: '-25px' }}
            >
              <Image
                src={`${process.env.PUBLIC_URL}/images/home-btn.svg`}
                display={{ base: 'block', md: 'none' }}
              />
              <Image
                src={`${process.env.PUBLIC_URL}/images/home-btn-desktop.svg`}
                display={{ base: 'none', md: 'block' }}
              />
              {/* <Text fontSize={{ base: '16px', md: '20px' }} fontWeight="bold">
                MINT NOW
              </Text> */}
            </Flex>
          </Flex>

          <Image
            src={`${process.env.PUBLIC_URL}/images/home-mobile.svg`}
            display={{ base: 'block', md: 'none' }}
            // className="home-img"
          />
          <Image
            src={`${process.env.PUBLIC_URL}/images/home.svg`}
            maxW="600px"
            className="home-img"
            display={{ base: 'none', md: 'block' }}
          />
        </Flex>
      </Box>
    </Box>
  );
}
