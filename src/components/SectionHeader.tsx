import React from "react";

type HeaderProps = {
  sectionName: string;
};
const Header = ({ sectionName }: HeaderProps) => {
  return (
    <div className="section-header">
      <h2 aria-label={sectionName}>{`<${sectionName} />`}</h2>
    </div>
  );
};

export default Header;
