import {
  Image,
  Box,
  Text,
  Flex,
  Heading,
  SimpleGrid,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const card = [
  {
    title: 'Product Ad Design.',
    des:
      'A social media ad that designed for a local medical product.',
    img:
      'https://images2.imgbox.com/37/ea/pPWpBsH6_o.png',
  },
  {
    title: 'Event Ad Design.',
    des:
      'Pre Event ad that designed for Space Odyssey',
    img:
      'https://images2.imgbox.com/b3/72/QmhiiLdN_o.png',
  },
  {
    title: 'T-Shirt Design.',
    des:
      'T shirt design and social media post for Helaya.',
    img:
      'https://images2.imgbox.com/eb/14/JRYzsBbc_o.png',
  },
  {
    title: 'Brand Design.',
    des:
      'Logo design for Tradition the local music band.',
    img:
      'https://images2.imgbox.com/ae/67/vnfrtDOy_o.png',
  },
  {
    title: 'Album Cover.',
    des:
      'Album cover design for Posindhu Rasanka.',
    img:
      'https://images2.imgbox.com/91/b9/6ZgWM0UH_o.png',
  },
  {
    title: 'T-shirt Design.',
    des:
      'A t-shirt design for school cadet.',
    img:
      'https://images2.imgbox.com/11/25/amHIfSeW_o.png',
  },
];

interface CardProps {
  title: string;
  des: string;
  img: string;
  index: number;
}

function Card(props: CardProps) {
  const { title, des, img, index } = props;
  return (
    <Flex
      boxShadow={'xl'}
      maxW={'640px'}
      direction={'column-reverse'}
      width={'full'}
      rounded={'3xl'}
      p={7}
      justifyContent={'center'}
      position={'relative'}
      bg={useColorModeValue('gray.200', 'gray.900')}
      >
      <Flex
        direction={'column'}
        textAlign={'center'}
        justifyContent={'center'}
        textColor={useColorModeValue('gray.700', 'gray.200')}>
        <Heading
          fontSize={'lg'}
          pb={2}>
          {title}
        </Heading>
        <Box maxW={'200px'} mx={'auto'}>
        <Text 
          textAlign={'justify'}
          fontSize={'sm'} 
          fontWeight={'md'} 
          textColor={useColorModeValue('gray.500', 'gray.400')}>
          {des}
        </Text>
        </Box>
      </Flex>
      <Image
        src={img}
        height={'200px'}
        width={'200px'}
        alignSelf={'center'}
        mb={5}
        rounded={'xl'}
        shadow={'lg'}
        _hover={{
                shadow: '2xl',
                transition: '1s ease',
              }}
      />
    </Flex>
  );
}

export default function work() {
  return (
    <Flex
      textAlign={'center'}
      pt={20}
      pb={20}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}>
      <Heading textAlign={'center'} fontSize={'4xl'} color={useColorModeValue("gray.800", "whiteAlpha.900")}>
        Some Work I have delivered.
      </Heading>
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        spacing={'10'}
        mt={16}
        mb={16}
        mx={'auto'}>
        {card.map((cardInfo, index) => (
          <Card {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
      <Text fontSize={'lg'} color={'gray.500'}>
        Check my work at
      </Text>
      <Button
        as={'a'}
        href={'https://www.behance.net/thoshirachanilka'}
        maxW={'160px'}
        mx={'auto'}
        px={4}
        fontSize={'md'}
        shadow={'xl'}
        rounded={'full'}
        bg={useColorModeValue('gray.700', 'gray.600')}
        color={'white'}
        
        _hover={{
          bg: 'blue.400',
          boxShadow: '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)',
        }}
        _focus={{
          bg: 'blue.500',
        }}>
        Behance.
      </Button>
    </Flex>
  );
}