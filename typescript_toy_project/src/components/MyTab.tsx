import Tab from "layout/Tab";
import { nanoid } from "nanoid";
import React, { MouseEvent } from "react";
import { useState } from "react";
import styled from "styled-components";

const MOCK_DATA = ["Tab1", "Tab2", "Tab3"];

const MyTab = () => {
  const [clickedTab, setClickedTab] = useState("");
  const activateTabHandler = (event: React.MouseEvent) => {
    const currentId = event.currentTarget.id;
    setClickedTab(currentId);
  };
  return (
    <div>
      <h3>Tab</h3>
      <TabHolder>
        {MOCK_DATA.map((item, index) => (
          <Tab
            key={nanoid()}
            id={index.toString()}
            clickedTab={clickedTab}
            onClick={activateTabHandler}
          >
            {item}
          </Tab>
        ))}
      </TabHolder>
    </div>
  );
};

const TabHolder = styled.nav`
  display: flex;
  justify-content: center;
  background: #e0e0e0;
  width: 800px;
  height: 50px;
`;

export default MyTab;
