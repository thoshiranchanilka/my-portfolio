"use client";
import theme from "./lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Head from "./components/head";
import SplashScreen from "./components/splashScreen";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);
  return (
    <html lang="en">
      <Head />
      <body>
        <ChakraProvider theme={theme}>
          {isLoading && isHome ? (
            <SplashScreen finishLoading={() => setIsLoading(false)} />
          ) : (
            <>
              <Nav />
              {children}
              <Footer />
            </>
          )}
        </ChakraProvider>
      </body>
    </html>
  );
}
