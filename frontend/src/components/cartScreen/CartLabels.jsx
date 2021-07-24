import React from "react";
import styled from "styled-components";

const GridRowLabels = styled.div`
  display: none;
  grid-template-columns: 25% auto 72px;
  @media (min-width: 840px) {
    display: grid;
    background-color: #eee;
    padding: 0.7em;
    font-size: 11px;
    line-height: 11px;
    margin-bottom: 2em;
    text-transform: uppercase;
    grid-template-areas: "imageL infoL priceL quantityL subtotalL";
    grid-gap: 0 15px;
    grid-template-columns: 12% auto 80px 130px 80px;
  }
`;

const Label = styled.div`
  grid-area: ${(props) => props.gridArea};
  @media (min-width: 840px) {
    text-align: ${(props) => props.textAlign};
  }
`;

export const CartLabels = () => {
  const labels = [
    { title: "image", gridArea: "imageL", textAlign: "center" },
    { title: "product", gridArea: "infoL" },
    { title: "unit price", gridArea: "priceL", textAlign: "right" },
    { title: "qty", gridArea: "quantityL", textAlign: "center" },
    { title: "subtotal", gridArea: "subtotalL", textAlign: "right" },
  ];
  return (
    <GridRowLabels id="GridRowLabels">
      {labels.map((label, index) => (
        <Label id="Label" gridArea={label.gridArea} textAlign={label.textAlign}>
          {label.title}
        </Label>
      ))}
    </GridRowLabels>
  );
};
