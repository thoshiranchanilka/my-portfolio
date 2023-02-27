import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Box,
    useBreakpointValue,
    useColorModeValue
  } from '@chakra-ui/react';
  
  export default function SplitScreen() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} mt={'10'}>
        <Flex p={8} flex={1} align={'center'} justify={'center'} >
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Box marginLeft={{ base:10, md:20 }} mx={{ base: 'auto'}}>
            <Heading>
              <Text
                color={'gray.500'}
                as={'span'}
                position={'relative'}
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                >
                Hello! I'm
              </Text>
              <br />{' '}
              <Text 
                color={useColorModeValue('gray.800', 'gray.100')} 
                as={'span'}
                fontSize={{ base: '3xl', md: '5xl', lg: '5xl' }}
                >
                Thoshiran Chanilka
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              A creative graphics designer and devoloper.
            </Text>
              <Box alignItems={'flex-start'}>
                <Button
                  mt={2}
                  size={'sm'}
                  px={'10'}
                  rounded={'full'}
                  bg={'gray.600'}
                  color={'white'}
                  _hover={{
                   bg: 'gray.700',
                 }}>
                 Resume
                </Button>
              </Box>
            </Box>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Thoshiran Chanilka'}
            height={{base: '400px', md: '500px'}}
            mx={{ base: 'auto', md: '1'}}
            objectFit={'cover'}
            src={
              'https://images2.imgbox.com/30/3e/vqusIttK_o.png'
            }
          />
        </Flex>
      </Stack>
    );
  }