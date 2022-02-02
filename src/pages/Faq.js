import {
  Box,
  Heading,
  Flex,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import Faq from 'react-faq-component';

const data = [
  {
    title: 'What is this mint price?',
    content: 'Mint price will be 0.1ETH',
  },
  {
    title: 'How many Chapters are planned?',
    content:
      'As of right now, 6 Chapters are in the works, but more are planned!',
  },
  {
    title: 'Will each chapter be the same brand?',
    content:
      'Yes and no. Each warrior in the chapters will be different, but everything will be hosted under The Meta Warriors ',
  },
  {
    title: 'What are the main giveaways?',
    content:
      'Each Chapter will have a main giveaway related to their group. For example: Chapter 1 will have a Zero Gravity ',
  },
  {
    title: 'Will there be a presale?',
    content:
      'Yes, we will be holding a presale 1 day prior to the public launch for our Whitelist members. Please join our Discord to learn how you can join the Whitelist. The Whitelist spots will be very limited. ',
  },
  {
    title: 'Are there secondary sale royalties?',
    content:
      'Yes, 10% of the secondary sales will be deducted in royalties for The Meta Warriors Team. A portion of those royalties will go towards marketing to ensure growth for the project and continued success.',
  },
];

const config = {
  animate: true,
};

export default function FAQ() {
  const styles = {
    bgColor: 'gr4',
    rowTitleColor: 'white',
    rowContentColor: 'white',
    rowTitleTextSize: 'large',
  };
  return (
    <Flex position="relative" pb="80" id="faq">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        maxW="1220px"
        mx="auto"
        w="100%"
      >
        <Box
          className="FAQ"
          py="50px"
          w="100%"
          backgroundRepeat="no-repeat"
          backgroundImage={`${process.env.PUBLIC_URL}/moon.svg`}
          alignSelf="flex-start"
          px={{ base: '20px', md: 0 }}
        >
          <Heading
            color="white"
            textTransform="uppercase"
            fontSize={{ base: '30px', md: '40px' }}
            fontWeight="bold"
          >
            FREQUENTLY ASK QUESTIONS
          </Heading>
        </Box>
        <Box w="100%" px={{ base: '20px', md: 0 }} pt="20px">
          <Accordion
            allowMultiple
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'flex-start', md: 'space-between' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
            flexWrap="wrap"
          >
            {data.map(item => (
              <AccordionItem
                bg="gr4"
                borderWidth="0"
                mb="30px"
                w={{ base: '100%', md: '49%' }}
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          color="white"
                          fontSize={{ base: '16px', md: '20px' }}
                          fontWeight="bold"
                        >
                          {item.title}
                        </Box>
                        {isExpanded ? (
                          <Image
                            src={`${process.env.PUBLIC_URL}/images/minus.svg`}
                          />
                        ) : (
                          <Image
                            src={`${process.env.PUBLIC_URL}/images/plus.svg`}
                          />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      color="white"
                      fontSize={{ base: '14px', md: '16px' }}
                    >
                      {item.content}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Flex>
      <Flex position="absolute" bottom="-20%" left="0">
        <Image
          h="440px"
          maxW="408px"
          src={`${process.env.PUBLIC_URL}/word.svg`}
        />
      </Flex>
    </Flex>
  );
}
