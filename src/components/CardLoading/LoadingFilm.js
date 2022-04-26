import React from "react";
import ContentLoader from "react-content-loader";

export default function LoadingFilm() {
  return (
    <ContentLoader 
    speed={2}
    width={292}
    height={390}
    viewBox="0 0 292 390"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="-2" rx="5" ry="5" width="292" height="167" /> 
    <rect x="15" y="212" rx="0" ry="0" width="250" height="15" /> 
    <rect x="13" y="354" rx="0" ry="0" width="107" height="13" /> 
    <rect x="15" y="175" rx="5" ry="5" width="250" height="24" /> 
    <rect x="13" y="375" rx="0" ry="0" width="107" height="13" /> 
    <rect x="15" y="242" rx="0" ry="0" width="250" height="15" /> 
    <rect x="15" y="272" rx="0" ry="0" width="250" height="15" /> 
    <rect x="235" y="348" rx="0" ry="0" width="0" height="1" />
  </ContentLoader>
     
  );
}
