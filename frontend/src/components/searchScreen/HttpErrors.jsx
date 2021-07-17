import React from "react";
import { useSelector } from "react-redux";
import {
  ErrorMsg,
  ErrorsMainContainer,
  Message,
} from "../../styledComponents/searchScreen/httpErrorsSC";

export const HttpErrors = () => {
  const productSearch = useSelector((state) => state.productSearch);

  const { error } = productSearch;

  return (
    <ErrorsMainContainer id="ErrorsMainContainer" hasError={error}>
      <Message id="Message">
        <ErrorMsg id="ErrorMsg">
          <ul>
            <li>
              <span>
                {error === ""
                  ? "An error occurred, please try again later."
                  : error}
              </span>
            </li>
          </ul>
        </ErrorMsg>
      </Message>
    </ErrorsMainContainer>
  );
};
