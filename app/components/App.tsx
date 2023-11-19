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
      <MainSection>
        <div>Welcome To The Fantastic Universe of Rick and Morty</div>
        <div>Please Navigate to Location to explore</div>
        <Link to={`/locations/${page}`}>
          Go to a route that renders locations
        </Link>
      </MainSection>
    </AppLayout>
  );
};

export default App;
