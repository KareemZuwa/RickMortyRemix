import React from "react";
import AppLayout from "~/layouts/AppLayout";
import MainSection from "./MainSection";

import { useLocationsInfo } from "../hooks/useLocationsInfo";
import { Link } from "@remix-run/react";
import SpinnerLoader from "./SpinnerLoader";

const App = () => {
  const page = 1;
  const { isLoading, error } = useLocationsInfo(page);

  if (isLoading) {
    return <SpinnerLoader />;
  }

  if (error) {
    return <div>Error: something went wrong while fetching data</div>;
  }

  return (
    <AppLayout>
      <div className="flex-1">
        <MainSection>
          <div className="h-96 flex-1 flex flex-col items-center justify-around">
            <div className="flex flex-col items-center justify-between font-racing text-3xl">
              <div>Welcome to the fantastic Universe of Rick and Morty</div>
            </div>
            <div>Pleace <b>Click the icon</b> to Navigate to Location to explore</div>
            <Link className="" to={`/locations/${page}`}>
            <div >
              <img className="w-40 h-40" src="favicon.ico" alt="icon" />
            </div>
            </Link>
            <p className="text-sm">"This application is the result of a coding assignment. Enjoy!"</p>
          </div>
        </MainSection>
      </div>
    </AppLayout>
  );
};

export default App;
