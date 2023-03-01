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
import Img01 from '../../../public/01.png'
import Img02 from '../../../public/02.png'
import Img03 from '../../../public/03.png'
import Img04 from '../../../public/04.png'
import Img05 from '../../../public/05.png'
import Img06 from '../../../public/06.png'
import Img07 from '../../../public/07.png'
import Img08 from '../../../public/08.png'
import Img09 from '../../../public/09.png'
import Img10 from '../../../public/10.png'
  
  
    interface CardProps {
      title: string;
      description: string;
      img: String;
      
    }
    function Card(props: CardProps) {
      const { title, description, img } = props;
      return (
        <Stack
          px={{ base: 4, md: 8 }}
          mx={2}
          py={'5'}
          shadow={'2xl'}
          rounded={'lg'}>
            <Box
              my={'auto'}
              color={useColorModeValue('gray.700', 'gray.300')}
              alignContent={'center'}>
              {img}
            </Box>
            <Box pl={{ base: 2, md: 4 }}>
              <Heading fontWeight={'bold'} isTruncated>
                {title}
              </Heading>
              <Text>
                {description}
              </Text>
            </Box>
        </Stack>
      );
    }

  export default function work() {
    return (
      <>
        <Heading mt={'40'} textAlign={'center'}>My Work.</Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 1, lg: 2 }}>
          <Card
            title={'Photoshop'}
            description={'test description'} 
            img={'01'}            
          />
        </SimpleGrid>
      </>
    );
  }