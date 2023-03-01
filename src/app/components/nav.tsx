import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Logo = (_props: any) => {
  return (
    <Image src={useColorModeValue('/logo-light.svg', '/logo-dark.svg')} alt={'logo'} height={9} width={9} shadow={'xl'} rounded={'xl'}/>
  );
};

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={10}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box as='a' href='/'>
            <Logo />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}