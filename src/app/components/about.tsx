import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
            <Image
              rounded={'3xl'}
              shadow={'dark-lg'}
              alt={'feature image'}
              src={
                'https://thumbs2.imgbox.com/7a/a4/yvL6Rett_t.jpg'
              }
              objectFit={'cover'}
              filter={'grayscale(100%)'}
            />
          </Flex>
          <Stack spacing={4} mt={2}>
            <Heading>Who am I?</Heading>
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
            
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }