import React from "react";
import { useNavigate } from "@remix-run/react";

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return <button className="sm:text-lg" onClick={handleGoBack}>← Back to Locations</button>;
};

export default GoBackButton;
