import {
    Box,
    Heading,
    Text,
    Stack,
    AspectRatio,
    useColorModeValue,
    Button,
  } from '@chakra-ui/react';
  
  export default function youtube() {
    return (
      <Box maxW="5xl" mx={'auto'} pt={20} px={{ base: 2, sm: 12, md: 17 }}>
        <Heading
          textAlign={'center'}
          fontSize={'4xl'}
          mb={5}
          >
          also I'm a Youtuber.
        </Heading>
        <Text textAlign={'center'} mt={1} fontSize={'lg'}>
          check out my latest performence.
        </Text>
        <Box mt={5}>
        <AspectRatio maxW='5xl' ratio={16 / 9}>
             <iframe
                title='Contant'
                src='https://www.youtube.com/embed/RYv5lkm4nk8'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </AspectRatio>
        </Box>
        <Text textAlign={'center'} mt={8} fontSize={'lg'}>
          Pay a visit and feel free to Subscribe.
        </Text>
        <Box textAlign={'center'}>
        <Button
              as={'a'}
              target={'_blank'}
              href={'#'}
              maxW={'140px'}
              mx={'auto'}
              px={4}
              fontSize={'md'}
              rounded={'full'}
              bg={useColorModeValue('gray.700', 'gray.600')}
              color={'white'}
              _hover={{
                bg: '#FF0000',
                boxShadow: '0px 1px 25px -5px rgb(255 0 0 / 48%), 0 10px 10px -5px rgb(255 0 0 / 43%)',
              }}
              _focus={{
                bg: '#FF0000',
              }}>
              Subscribe
            </Button>
            </Box>
      </Box>
    );
  }