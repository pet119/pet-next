/* eslint-disable */
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if (pathname === '/' || pathname.startsWith('/signup')) {
    // 첫 페이지에서는 레이아웃을 표시하지 않음
    return <Component {...pageProps} />;
  }
  return (
    <>
    {isMounted &&
      <Layout>
        <Component {...pageProps} />
      </Layout>
    }
    </>
  );
}
