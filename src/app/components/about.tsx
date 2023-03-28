import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function About() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
            <Image
              rounded={'3xl'}
              shadow={'xl'}
              alt={'feature image'}
              src={
                '/feature.jpg'
              }
              objectFit={'cover'}
              filter={'grayscale(100%)'}
              _hover={{
                filter: 'grayscale(0%)',
                transition: '1s ease',
              }}
            />
          </Flex>
          <Stack spacing={4} mt={2}>
            <Heading color={useColorModeValue("gray.800", "whiteAlpha.900")}>Who am I?</Heading>
            <Text color={'gray.500'} fontSize={'lg'} textAlign={'justify'}>
            Hi, I'm Thoshiran Chanilka, a passionate graphics designer 
            with over 6 years of experience. I specialize in using software 
            such as Photoshop, Illustrator, After Effects, Figma, and Premier 
            Pro to bring ideas to life. I've collaborated with local brands to 
            create designs that stand out and serve a practical purpose. My 
            portfolio showcases a range of designs that reflect my creativity, 
            attention to detail, and ability to bring out the best in my clients' 
            ideas. Designing is not just a profession, it's my passion, and I'm always 
            excited to take on new challenges and work with clients to create designs 
            that make a lasting impression.
            </Text>
            <Button
              as={'a'}
              target={'_blank'}
              href={'https://thoshiranslinktree.netlify.app/'}
              maxW={'140px'}
              mx={'auto'}
              px={4}
              fontSize={'md'}
              shadow={'xl'}
              rounded={'full'}
              bg={useColorModeValue("gray.800", "gray.500")}
              color={'white'}
        
              _hover={{
                  color: "gray.800",
                  bg: "brand.600",
                  boxShadow:
                    "0px 1px 25px -5px rgb(255 255 0 / 48%), 0 10px 10px -5px rgb(255 255 0 / 43%)",
              }}
              >
              LinkTree.
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }