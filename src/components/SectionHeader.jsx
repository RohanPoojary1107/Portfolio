import React from "react";

const Header = ({ sectionName }) => {
  return (
    <div className="section-header">
      <h2 aria-label={sectionName}>{`<${sectionName} />`}</h2>
    </div>
  );
};

export default Header;
