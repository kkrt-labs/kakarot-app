import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/provider";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

import defaultSEOConfig from "../next-seo.config";

function Kakarot({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Kakarot;
