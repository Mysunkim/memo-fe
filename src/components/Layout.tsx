import {Header} from './Header';
import {Footer} from './Footer';
import type { ReactNode } from 'react';
type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>

      <Footer />
    </div>
  );
};