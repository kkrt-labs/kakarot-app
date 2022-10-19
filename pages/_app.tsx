import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { StarknetConfig } from "@starknet-react/core";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

import Layout from "../components/layout/Layout";
import defaultSEOConfig from "../next-seo.config";

function Kakarot({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <StarknetConfig>
        <DefaultSeo {...defaultSEOConfig} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StarknetConfig>
    </ChakraProvider>
  );
}

export default Kakarot;
