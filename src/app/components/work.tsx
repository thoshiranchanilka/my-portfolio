import {
  Image,
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

const card = [
  {
    title: 'Design 01',
    des:
      'This is a test description',
    img:
      'https://thumbs2.imgbox.com/37/ea/pPWpBsH6_t.png',
  },
  {
    title: 'Design 01',
    des:
      'This is a test description',
    img:
      'https://thumbs2.imgbox.com/37/ea/pPWpBsH6_t.png',
  },
  {
    title: 'Design 01',
    des:
      'This is a test description',
    img:
      'https://thumbs2.imgbox.com/37/ea/pPWpBsH6_t.png',
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
        justifyContent={'center'}>
        <Heading
          fontSize={'xl'}
          pb={2}>
          {title}
        </Heading>
        <Box maxW={'200px'}>
        <Heading fontSize={'md'} fontWeight={'md'} fontFamily={'Courier Prime'}>
          {des}
        </Heading>
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
    </Flex>
  );
}