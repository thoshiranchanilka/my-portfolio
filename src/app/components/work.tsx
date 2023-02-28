import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    SimpleGrid,
  } from '@chakra-ui/react';
  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export default function work() {
    return (
      <>
        <Heading mt={'40'} textAlign={'center'}>My Work.</Heading>
          <Center>
          <Stack mx={'auto'} direction={'row'} spacing={{ base: 1, lg: 2 }}>
          <Box py={12}>
            <Box
              role={'group'}
              mt={'4'}
              p={6}
              maxW={'330px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'dark-lg'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}>
              <Box
                rounded={'lg'}
                mt={2}
                pos={'relative'}
                height={'230px'}
                  >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={IMAGE} />
            </Box>
              <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Brand
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  Nice Chair, pink
                </Heading>
                <Stack direction={'row'} align={'center'}>
                  <Text fontWeight={800} fontSize={'xl'}>
                    $57
                  </Text>
                  <Text textDecoration={'line-through'} color={'gray.600'}>
                    $199
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box py={12}>
            <Box
              role={'group'}
              mt={'4'}
              p={6}
              maxW={'330px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'dark-lg'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}>
              <Box
                rounded={'lg'}
                mt={2}
                pos={'relative'}
                height={'230px'}
                  >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={IMAGE} />
            </Box>
              <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Brand
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  Nice Chair, pink
                </Heading>
                <Stack direction={'row'} align={'center'}>
                  <Text fontWeight={800} fontSize={'xl'}>
                    $57
                  </Text>
                  <Text textDecoration={'line-through'} color={'gray.600'}>
                    $199
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box py={12}>
            <Box
              role={'group'}
              mt={'4'}
              p={6}
              maxW={'330px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'dark-lg'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}>
              <Box
                rounded={'lg'}
                mt={2}
                pos={'relative'}
                height={'230px'}
                  >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={IMAGE} />
            </Box>
              <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Brand
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  Nice Chair, pink
                </Heading>
                <Stack direction={'row'} align={'center'}>
                  <Text fontWeight={800} fontSize={'xl'}>
                    $57
                  </Text>
                  <Text textDecoration={'line-through'} color={'gray.600'}>
                    $199
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Center>
      </>
    );
  }