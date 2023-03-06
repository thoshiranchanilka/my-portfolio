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
    title: 'Food Ad Design.',
    des:
      'A social media ad that designed for local food restaurant.',
    img:
      'https://images2.imgbox.com/c3/dd/aFcZ8I9L_o.png',
  },
  {
    title: 'T-Shirt Design.',
    des:
      'T shirt design and social media post for Helaya.',
    img:
      'https://images2.imgbox.com/eb/14/JRYzsBbc_o.png',
  },
  {
    title: 'Shoe ad Design.',
    des:
      'Product ad design for Kingsman the local Brand.',
    img:
      'https://images2.imgbox.com/ff/49/U4yMVXfS_o.png',
  },
  {
    title: 'Event Ad Design.',
    des:
      'Social media ad for the Esperance 2019 event.',
    img:
      'https://images2.imgbox.com/01/df/8suW9XuZ_o.png',
  },
  {
    title: 'Social Media Post.',
    des:
      'Social media reminder post for Space Odyssey.',
    img:
      'https://images2.imgbox.com/bc/1d/c2pmFdtD_o.png',
  },
  {
    title: 'Brand Design.',
    des:
      'Logo design for Tradition the local music band.',
    img:
      'https://images2.imgbox.com/ae/67/vnfrtDOy_o.png',
  },
  {
    title: 'Badge Design.',
    des:
      'Badge design for the media unit of DSSNS Ampra.',
    img:
      'https://images2.imgbox.com/5d/67/BYBSwKNK_o.png',
  },
  {
    title: 'Logo Design.',
    des:
      'Logo design for Debating sociaty of DSSNS Ampra.',
    img:
      'https://images2.imgbox.com/a6/68/hoYHwZDl_o.png',
  },
  {
    title: 'Album Cover.',
    des:
      'Album cover design for Posindhu Rasanka.',
    img:
      'https://images2.imgbox.com/91/b9/6ZgWM0UH_o.png',
  },
  {
    title: 'Flyer Design.',
    des:
      'A flyer design for a local tuter.',
    img:
      'https://images2.imgbox.com/bb/3e/nS8idP0q_o.png',
  },
  {
    title: 'Banner Design.',
    des:
      'A banner design for a local food restaurant.',
    img:
      'https://images2.imgbox.com/34/6f/tqmnxRkz_o.png',
  },
  {
    title: 'Flyer Design.',
    des:
      'A flyer design for a local food restaurant.',
    img:
      'https://images2.imgbox.com/ef/d3/dOUwUvWn_o.png',
  },
  {
    title: 'T-shirt Design.',
    des:
      'A t-shirt design for school cadet.',
    img:
      'https://images2.imgbox.com/11/25/amHIfSeW_o.png',
  },
  {
    title: 'Cover Design.',
    des:
      'A social media cover design for a local clothing brand.',
    img:
      'https://images2.imgbox.com/ab/6a/rjFSoJld_o.png',
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
      <Heading textAlign={'center'} fontSize={'4xl'}>
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
      <Text fontSize={'lg'}>
        Check my work at
      </Text>
      <Button
        as={'a'}
        href={'https://www.behance.net/thoshirachanilka'}
        maxW={'140px'}
        mx={'auto'}
        px={4}
        fontSize={'md'}
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