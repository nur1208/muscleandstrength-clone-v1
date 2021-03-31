import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FlexContainer = styled.div`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

const FlexItem = styled.div`
  background-color: #f1f1f1;
  margin: 10px;
  padding: 10px;
  font-size: 30px;
`;

export const FlexBox1 = () => {
  return (
    <>
      <FlexContainer>
        <FlexItem>1</FlexItem>
      </FlexContainer>
      <p>
        A Flexible Layout must have a parent element with the <em>display</em>{" "}
        property set to <em>flex</em>.
      </p>

      <p>
        Direct child elements(s) of the flexible container automatically becomes
        flexible items.
      </p>
    </>
  );
};
