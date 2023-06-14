import * as React from 'react';

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return <div className="prose prose-lg prose-invert m-auto p-4">{children}</div>;
};

export default Layout;
