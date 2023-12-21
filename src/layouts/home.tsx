import React, { ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return <div style={{ width: '100%', height: '100vh' }}>{children}</div>;
};

export default HomeLayout;
