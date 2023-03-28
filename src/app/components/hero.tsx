import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

export default function hero() {
  return (
    <Stack 
      minH={"100vh"} 
      direction={{ base: "column", md: "row" }} 
      mt={"10"}
      >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Box marginLeft={{ base: 10, md: 20 }} mx={{ base: "auto" }}>
            <Heading>
              <Text
                color={useColorModeValue("gray.600", "gray.500")}
                as={"span"}
                position={"relative"}
                fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}
              >
                Hello! I'm
              </Text>
              <br />{" "}
              <Text
                color={useColorModeValue("gray.800", "whiteAlpha.900")}
                as={"span"}
                fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
              >
                Thoshiran Chanilka
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "sm", lg: "md" }} color={useColorModeValue("gray.600", "gray.500")}>
              A creative graphics designer and devoloper.
            </Text>
            <Box alignItems={"flex-start"}>
              <Button
                as={"a"}
                target={"_blank"}
                href={
                  "https://drive.google.com/file/d/1NqY_yG4Bg0eHvydACbvbpIkAar_CBbvf/view?usp=share_link"
                }
                mt={2}
                size={"sm"}
                px={"10"}
                rounded={"full"}
                bg={useColorModeValue("gray.700", "gray.500")}
                color={"white"}
                shadow={"xl"}
                _hover={{
                  color: "gray.800",
                  bg: "brand.600",
                  boxShadow:
                    "0px 1px 25px -5px rgb(255 255 0 / 48%), 0 10px 10px -5px rgb(255 255 0 / 43%)",
                }}
                download
              >
                Resume
              </Button>
            </Box>
          </Box>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Thoshiran Chanilka"}
          height={{ base: "400px", md: "500px" }}
          mx={{ base: "auto", md: "1" }}
          objectFit={"cover"}
          src={"/subject.png"}
        />
      </Flex>
    </Stack>
  );
}
