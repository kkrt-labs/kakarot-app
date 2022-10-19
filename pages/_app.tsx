import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { StarknetConfig } from "@starknet-react/core";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

import defaultSEOConfig from "../next-seo.config";

function Kakarot({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <StarknetConfig>
        <DefaultSeo {...defaultSEOConfig} />
        <Component {...pageProps} />
      </StarknetConfig>
    </ChakraProvider>
  );
}

export default Kakarot;
