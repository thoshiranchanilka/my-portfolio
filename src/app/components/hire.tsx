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
} from "@chakra-ui/react";

export default function Hire() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={8} mt={2} >
          <Heading color={useColorModeValue("gray.800", "whiteAlpha.900")}>Hire me at Fiverr.</Heading>
          <Text color={"gray.500"} fontSize={"lg"} textAlign={"justify"}>
            If you are interested feel free to checkout my fiverr profile.
          </Text>
          <Button
            as={"a"}
            target={"_blank"}
            href={"https://www.fiverr.com/thoshiranc"}
            maxW={"140px"}
            mx={"auto"}
            px={4}
            fontSize={"md"}
            rounded={"full"}
            bg={useColorModeValue("gray.700", "gray.600")}
            color={"white"}
            _hover={{
              bg: "#1DBF73",
              boxShadow:
                "0px 1px 25px -5px rgb(29 191 115 / 48%), 0 10px 10px -5px rgb(29 191 115 / 43%)",
            }}
            _focus={{
              bg: "#1DBF73",
            }}
          >
            Fiverr.
          </Button>
        </Stack>
        <Flex>
          <Image
            rounded={"3xl"}
            alt={"feature image"}
            src={
              "/hire.svg"
            }
            objectFit={"cover"}
            filter={"grayscale(100%)"}
            _hover={{
              filter: "grayscale(0%)",
              transition: "0.5s ease",
            }}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
