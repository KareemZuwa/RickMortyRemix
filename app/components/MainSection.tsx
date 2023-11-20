import React from "react";
import Breadcrumbs from "./BreadCrumbs";

interface MainSectionProps {
  children: React.ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({ children }) => (
  <div className="flex flex-col">
    <Breadcrumbs />
    <div className="flex-1 flex flex-col justify-between">
      <div className="flex-1 mb-4">{children}</div>
    </div>
  </div>
);

export default MainSection;
