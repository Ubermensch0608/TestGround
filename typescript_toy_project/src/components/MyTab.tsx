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

  const selectedTab = () => {
    if (clickedTab === "0") {
      return <span>ONE</span>;
    } else if (clickedTab === "1") {
      return <span>TWO</span>;
    } else if (clickedTab === "2") {
      return <span>Three</span>;
    }
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
      <Wrapper>
        <div>Tab menu {selectedTab()}</div>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const TabHolder = styled.nav`
  display: flex;
  justify-content: center;
  background: #e0e0e0;
  width: 800px;
  height: 50px;
`;

export default MyTab;
