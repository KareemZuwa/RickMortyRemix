import type { ReactNode } from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen min-w-screen px-16 flex flex-col mx-auto max-w-screen-2xl">
      <div className="flex-1">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
