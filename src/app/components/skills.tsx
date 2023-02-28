import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
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
        shadow={'dark-lg'}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              <Progress mt={2} rounded={'md'} value={stat} colorScheme={'gray'}/>
            </StatNumber>
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function skills() {
    return (
      <Box maxW="5xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Skills.
        </chakra.h1>
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
            stat={70}
            icon={<SiAdobeaftereffects size={'3em'} />}
          />
          <StatsCard
            title={'Premier Pro'}
            stat={65}
            icon={<SiAdobepremierepro size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    );
  }