import React from 'react';
import NavBar from '@/components/NavBar.tsx';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div>{children}</div>
      <NavBar />
    </>
  );
}
