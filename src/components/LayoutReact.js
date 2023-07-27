import React from "react";
import HeaderReact from "./HeaderReact";
import MainReact from "./MainReact";
import FooterReact from "./FooterReact";
import NavReact from "./NavReact";


const LayoutReact = () => {
  return (
    <div className="layout">
      
      <HeaderReact/>
      <NavReact/>
      <MainReact/>
      <FooterReact />
    </div>
  );
};

export default LayoutReact;
