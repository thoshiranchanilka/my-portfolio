"use client";
import { Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ finishLoading }: any) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    if (isMounted) {
      const timeout = setTimeout(() => {
        finishLoading();
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isMounted]);

  return (
    <>
      <Flex align={"center"} justify={"center"} h={"100vh"}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Image src="./favicon.ico" alt="Logo" width={32} height={32} />
        </motion.div>
      </Flex>
    </>
  );
}
