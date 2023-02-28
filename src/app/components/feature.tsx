import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
import { MdPhoto, MdMotionPhotosOn, MdPhotoCameraFront } from 'react-icons/md';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
  
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    
    <Stack align={'center'} mt={20}>
      
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text textAlign={'center'} fontWeight={600}>{title}</Text>
      <Text textAlign={'justify'} color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    
    <Box p={20} mx={'auto'} mt={10}>
      <Heading textAlign={'center'}>What Do I do !</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} >
        <Feature
          icon={<Icon as={MdPhoto} w={10} h={10} color={'gray.600'}/>}
          title={'Graphic Design'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={MdMotionPhotosOn} w={10} h={10} color={'gray.600'}/>}
          title={'Illustration'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={MdPhotoCameraFront} w={10} h={10} color={'gray.600'}/>}
          title={'Vedio Graphics'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
  );
}