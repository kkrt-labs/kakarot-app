import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StarknetConfig } from "@starknet-react/core";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "../components/layout/Layout";
import customColors from "../styles/theme/colors";

const theme = extendTheme({
  colors: customColors,
});

function Kakarot({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
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
