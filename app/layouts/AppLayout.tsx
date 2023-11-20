import type { ReactNode } from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen min-w-screen px-4 sm:px-8 lg:px-16 flex flex-col mx-auto max-w-screen-2xl">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
