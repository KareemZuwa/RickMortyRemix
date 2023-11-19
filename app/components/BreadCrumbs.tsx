import React from "react";
import { Link, useParams } from "@remix-run/react";

const BreadCrumbs = () => {
  const { page } = useParams();

  const generateBreadcrumbLinks = () => {
    const breadcrumbs = [
      { label: "Home", to: "/", clickable: true },
      { label: "Locations", to: "/locations", clickable: false }, // Set clickable to false for "Locations"
      ...(page ? [{ label: `Page ${page}`, to: `/locations/${page}` }] : []), // Include "Page" breadcrumb only if `page` is present
    ];

    return breadcrumbs.map((breadcrumb, index) => (
      <React.Fragment key={breadcrumb.to}>
        {breadcrumb.clickable ? (
          <Link
            className={`text-xs text-gray-900 ${
              index === breadcrumbs.length - 1 ? "font-bold" : ""
            }`}
            to={breadcrumb.to}
          >
            {breadcrumb.label}
          </Link>
        ) : (
          <span
            className={`text-xs text-gray-900 ${
              index === breadcrumbs.length - 1 ? "font-bold" : ""
            }`}
          >
            {breadcrumb.label}
          </span>
        )}
        {index < breadcrumbs.length - 1 && (
          <span className="text-xs text-gray-900 px-0.5"> / </span>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="flex justify-between h-12 border-b-2 border-gray-900">
      <div className="flex items-center">{generateBreadcrumbLinks()}</div>
    </div>
  );
};

export default BreadCrumbs;
