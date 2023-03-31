import { motion, useScroll } from "framer-motion";
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
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Progress } from "@chakra-ui/react";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";

interface StatsCardProps {
  title: string;
  stat: number;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
      viewport={{ once: true }}
    >
      <Stat
        px={{ base: 4, md: 8 }}
        mx={2}
        py={"5"}
        shadow={"xl"}
        rounded={"lg"}
        bgColor={useColorModeValue("gray.100", "gray.700")}
      >
        <Flex justifyContent={{ lg: "center" }} alignItems={"center"}>
          <Box my={"auto"} color={useColorModeValue("gray.700", "gray.300")}>
            {icon}
          </Box>
          <Box pl={{ base: 2, md: 4, sm: 8 }}>
            <StatLabel fontWeight={"bold"} isTruncated>
              {title}
            </StatLabel>
            <StatNumber>
              <Progress
                mt={2}
                rounded={"md"}
                value={stat}
                colorScheme={"gray"}
                maxW={{ lg: "70px", md: "210px", sm: "310px" }}
                minW={{ lg: "70px", md: "140px", sm: "240px" }}
              />
            </StatNumber>
          </Box>
        </Flex>
      </Stat>
    </motion.div>
  );
}

export default function skills() {
  return (
    <Box maxW="5xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 14 }}>
      <Heading textAlign={"center"} fontSize={"4xl"} py={10} mb={10}>
        Some Skills I have.
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={{ base: 1, lg: 2, md: 4 }}
      >
        <StatsCard
          title={"Photoshop"}
          stat={85}
          icon={<SiAdobephotoshop size={"3em"} />}
        />
        <StatsCard
          title={"Illustrator"}
          stat={75}
          icon={<SiAdobeillustrator size={"3em"} />}
        />
        <StatsCard
          title={"After Effects"}
          stat={70}
          icon={<SiAdobeaftereffects size={"3em"} />}
        />
        <StatsCard
          title={"Premier Pro"}
          stat={65}
          icon={<SiAdobepremierepro size={"3em"} />}
        />
      </SimpleGrid>
      <Text textAlign={"center"} mt={10} fontSize={"lg"}>
        also I used to work with softwares like Figma, Audacity, Code, Filmora,
        etc.
      </Text>
    </Box>
  );
}
