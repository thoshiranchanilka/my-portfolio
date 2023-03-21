"use client";
import theme from "./lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Head from "./components/head";
import SplashScreen from "./components/splashScreen";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

//Font Weights
import "@fontsource/poppins/500.css";
import "@fontsource/space-grotesk/700.css";

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
      <Head>
        <meta name="google-site-verification" content="EwZo3L6BAR_o-LhyxRZLtBOr5nHTjPBzOa5UE_Monjg" />
      </Head>
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
