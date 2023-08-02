import {
    Box,
    Flex,
    Heading,
    Text,
    SimpleGrid,
    Stat,
    StatLabel,
    Stack,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { Progress } from '@chakra-ui/react';
  import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiAdobepremierepro } from 'react-icons/si';
  
  interface StatsCardProps {
    title: string;
    stat: number;
    icon: ReactNode;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        mx={2}
        py={'5'}
        shadow={'xl'}
        rounded={'lg'}
        bgColor={useColorModeValue('gray.100', 'gray.700')}>
        <Flex justifyContent={'center'}>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.700', 'gray.300')}
            >
            {icon}
          </Box>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'bold'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber>
              <Progress mt={2} rounded={'md'} value={stat} colorScheme={'gray'} maxW={'70px'}/>
            </StatNumber>
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function skills() {
    return (
      <Box maxW="5xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <Heading
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          mb={10}
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          >
           Some Skills I have.
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 1, lg: 2 }}>
          <StatsCard
            title={'Photoshop'}
            stat={85}
            icon={<SiAdobephotoshop size={'3em'} />}
          />
          <StatsCard
            title={'Illustrator'}
            stat={75}
            icon={<SiAdobeillustrator size={'3em'} />}
          />
          <StatsCard
            title={'After Effects'}
            stat={85}
            icon={<SiAdobeaftereffects size={'3em'} />}
          />
          <StatsCard
            title={'Premier Pro'}
            stat={75}
            icon={<SiAdobepremierepro size={'3em'} />}
          />
        </SimpleGrid>
        <Text textAlign={'center'} mt={10} fontSize={'lg'} color={'gray.500'}>
          also I used to work with softwares like Figma, Audacity, Code, Filmora, etc.
        </Text>
      </Box>
    );
  }
