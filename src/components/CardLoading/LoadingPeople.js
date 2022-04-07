import React from "react";
import ContentLoader from "react-content-loader";

export default function LoadingPeople() {
  return (
    <ContentLoader 
    speed={2}
    width={275}
    height={285}
    viewBox="0 0 275 285"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="59" y="223" rx="0" ry="0" width="149" height="14" /> 
    <rect x="108" y="175" rx="5" ry="5" width="48" height="24" /> 
    <rect x="42" y="133" rx="0" ry="0" width="187" height="17" /> 
    <rect x="235" y="348" rx="0" ry="0" width="0" height="1" /> 
    <circle cx="137" cy="62" r="42" />
  </ContentLoader>
     
  );
}
