import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f2f2"
    foregroundColor="#d6d1d1"
  >
    <rect x="528" y="533" rx="3" ry="3" width="88" height="6" /> 
    <rect x="544" y="532" rx="3" ry="3" width="52" height="6" /> 
    <rect x="480" y="526" rx="3" ry="3" width="410" height="6" /> 
    <rect x="0" y="288" rx="5" ry="5" width="280" height="26" /> 
    <circle cx="130" cy="130" r="130" /> 
    <rect x="0" y="327" rx="10" ry="10" width="280" height="64" /> 
    <rect x="109" y="387" rx="0" ry="0" width="1" height="0" /> 
    <rect x="0" y="401" rx="4" ry="4" width="113" height="27" /> 
    <rect x="154" y="402" rx="10" ry="10" width="122" height="28" /> 
    <rect x="563" y="526" rx="8" ry="8" width="23" height="15" />
  </ContentLoader>
)

export default Skeleton

