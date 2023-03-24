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
        <Stack spacing={4} mt={2}>
          <Heading>Hire me at Fiverr.</Heading>
          <Text color={"gray.500"} fontSize={"lg"} textAlign={"left"}>
            If you are interested feel free to checkout my fiverr profile.
          </Text>
          <Button
            as={"a"}
            target={"_blank"}
            href={"#"}
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
            shadow={"xl"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            }
            objectFit={"cover"}
            filter={"grayscale(100%)"}
            _hover={{
              filter: "grayscale(0%)",
              transition: "1s ease",
            }}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
