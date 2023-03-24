import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { MdPhoto, MdMotionPhotosOn, MdPhotoCameraFront } from "react-icons/md";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack align={"center"} mt={20}>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text textAlign={"center"} fontWeight={600}>
        {title}
      </Text>
      <Text textAlign={"center"} color={"gray.500"} maxW={"40ch"}>
        {text}
      </Text>
    </Stack>
  );
};

export default function Services() {
  return (
    <Box p={20} mx={"auto"} mt={10}>
      <Heading textAlign={"center"}>What Do I do !</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={MdPhoto} w={10} h={10} color={"gray.600"} />}
          title={"Graphic Design"}
          text={
            "Graphic design uses visual elements to communicate messages and evoke emotions, playing a vital role in marketing, branding, and shaping perceptions."
          }
        />
        <Feature
          icon={<Icon as={MdMotionPhotosOn} w={10} h={10} color={"gray.600"} />}
          title={"Illustration"}
          text={
            "Illustration is the art of creating visual representations of ideas, concepts, or narratives using various techniques and mediums such as pencils, paints, or digital tools."
          }
        />
        <Feature
          icon={
            <Icon as={MdPhotoCameraFront} w={10} h={10} color={"gray.600"} />
          }
          title={"Vedio Graphics"}
          text={
            "Video graphics refer to the computer-generated imagery used in video production, such as visual effects, animations, and motion graphics, to enhance the visual appeal and communication of the video content."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
