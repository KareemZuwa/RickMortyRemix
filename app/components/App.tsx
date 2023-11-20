import React from "react";
import AppLayout from "~/layouts/AppLayout";
import MainSection from "./MainSection";
import { ArrowDownIcon } from '@heroicons/react/24/solid'

import { useLocationsInfo } from "../hooks/useLocationsInfo";
import { Link } from "@remix-run/react";
import SpinnerLoader from "./SpinnerLoader";

const App = () => {
  const page = 1;
  const { isLoading, error } = useLocationsInfo(page);

  return (
    <AppLayout>
      <div className="flex-1">
        <MainSection>
          {error ? (
            <div className="h-full w-full flex items-center justify-center py-16">
              <div>Error: something went wrong while fetching data</div>
            </div>
          ) : isLoading ? (
            <div className="h-full w-full flex items-center justify-center py-16">
              <SpinnerLoader />
            </div>
          ) : (
            <div className="h-96 flex-1 flex flex-col items-center justify-around">
              <div className="flex flex-col items-center justify-between font-racing text-3xl">
                <div>Welcome to the fantastic Universe of Rick and Morty</div>
              </div>
              <div>
                Please <b className="text-galaxyOrange-900 border-b-2 border-gray-900 border-spacing-4">Click the yellow image</b> to Navigate the Locations
              </div>
              <ArrowDownIcon className="w-6"/>
              <Link className="" to={`/locations/${page}`}>
                <div>
                  <img className="w-40 h-40" src="favicon.ico" alt="icon" />
                </div>
              </Link>
              <p className="text-sm">
                "This application is the result of a coding assignment. Wubba Lubba Dub Dub!"
              </p>
            </div>
          )}
        </MainSection>
      </div>
    </AppLayout>
  );
};

export default App;
