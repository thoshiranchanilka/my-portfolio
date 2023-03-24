import Link from "next/link";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const Logo = (_props: any) => {
  return (
    <Image
      src={useColorModeValue("/logo-light.svg", "/logo-dark.svg")}
      alt={"logo"}
      height={9}
      width={9}
      shadow={"xl"}
      rounded={"xl"}
    />
  );
};

export default function footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={"column"}
          justify={"center"}
          align={"center"}
        >
          <Text textColor={"gray.500"} textAlign={"center"}>
            © {new Date().getFullYear()} Thoshiran Chanilka. All rights reserved
          </Text>
          <Text textColor={"gray.500"} textAlign={"center"}>
            Created by{" "}
            <Link
              target={"_blank"}
              href="https://thoshiranslinktree.netlify.app"
            >
              Thoshiran Chanilka
            </Link>{" "}
            &{" "}
            <Link target={"_blank"} href="https://pruthivithejan.me">
              Pruthivi Thejan
            </Link>
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
