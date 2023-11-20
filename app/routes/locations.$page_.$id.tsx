import React from "react";
import { useParams } from "@remix-run/react";
import useLocation from "~/hooks/useLocation";
import AppLayout from "~/layouts/AppLayout";
import MainSection from "~/components/MainSection";
import { LocationView } from "~/components/LocationView";

const LocationDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useLocation(id || "");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: fetching gone wrong</div>;
  }

  return (
    <div>
      <AppLayout>
        <div className="flex-1">
          <MainSection>
            <div className="flex-grow-1 flex flex-col justify-between">
              <LocationView locationResponse={data} />
            </div>
          </MainSection>
        </div>
      </AppLayout>
    </div>
  );
};

export default LocationDetail;
