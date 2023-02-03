import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import Container from '@/components/layout/Container';
import theme from '@/styles/theme';
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {

  return (
      <Provider store={store}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={theme}
        >
          <Container>
            <Component {...pageProps} />
          </Container>
        </MantineProvider>
      </Provider>
  )
    
}
