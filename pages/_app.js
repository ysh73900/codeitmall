import Container from '@/components/Container';
import Header from '@/components/Header';
import Head from 'next/head';
import { ThemeProvider } from '@/lib/ThemeContext';
import '@/styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Codeitmall</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
