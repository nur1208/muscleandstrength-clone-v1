import React from "react";
import {
  ErrorMsg,
  ErrorsMainContainer,
  Message,
} from "../../styledComponents/searchScreen/httpErrorsSC";

export const HttpErrors = () => {
  return (
    <ErrorsMainContainer id="ErrorsMainContainer">
      <Message id="Message">
        <ErrorMsg id="ErrorMsg">
          <ul>
            <li>
              <span>An error occurred, please try again later.</span>
            </li>
          </ul>
        </ErrorMsg>
      </Message>
    </ErrorsMainContainer>
  );
};
