import React from "react";
import {
  ButtonSC,
  Loader,
  LoaderBlock,
} from "./../styledComponents/buttonSC";
// props (isGreen, isLong, style)
// - isGreen props for setting the button color to green
// default color is white
// - isLong make the button longer than the default
// - style props let the user add more styles to the button.
// - isLoading for showing the loading icon when there is loading
// and isLoading like hasLoading because if the user didn't pass isLoading to true the loading icon never will be seeing.
// - isLoaderBlue for set the loading icon to blue, the default is white
export const Button = ({
  children,
  isGreen,
  isLong,
  style,
  isLoading,
  isLoaderBlue,
}) => {
  return (
    <ButtonSC isGreen={isGreen} isLong={isLong} style={style}>
      {children}{" "}
      <LoaderBlock id="LoaderBlock" isLoading={isLoading}>
        <Loader id="Loader" isBlue={isLoaderBlue} />
      </LoaderBlock>
    </ButtonSC>
  );
};
