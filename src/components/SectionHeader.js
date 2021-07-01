import React from "react";

const Header = ({ sectionName }) => {
  return (
    <div className="section-header">
      <div>
        <span className="section-title">{sectionName}</span>
      </div>
    </div>
  );
};

export default Header;
