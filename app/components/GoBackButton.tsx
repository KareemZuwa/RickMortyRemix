import React from "react";
import { useNavigate } from "@remix-run/react";

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will simulate going back one step in the history
  };

  return <button className="text-lg" onClick={handleGoBack}>← Back to Locations</button>;
};

export default GoBackButton;
