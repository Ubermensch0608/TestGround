import Tab from "layout/Tab";
import React from "react";

const MOCK_DATA = ["Tab1", "Tab2", "Tab3"];

const MyTab = () => {
  return (
    <div>
      {MOCK_DATA.map((item) => (
        <Tab>{item}</Tab>
      ))}
    </div>
  );
};

export default MyTab;
