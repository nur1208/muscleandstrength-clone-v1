import React from "react";
import {
  LoaderBlock,
  LoaderContainer,
  Loading,
} from "../../styledComponents/searchScreen/loaderSC";

export const Loader = () => {
  return (
    <LoaderContainer id="LoaderContainer">
      <LoaderBlock id="LoaderBlock">
        <Loading id="Loading" />
      </LoaderBlock>
    </LoaderContainer>
  );
};
