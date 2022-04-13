import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col overflow-hidden min-h-screen">{children}</div>
  );
};

export default Layout;
