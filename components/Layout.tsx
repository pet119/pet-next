import React from 'react';
import NavBar from '@/components/NavBar.tsx';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
