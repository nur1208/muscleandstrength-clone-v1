import React from "react";
import { useSelector } from "react-redux";
import {
  StoreControl,
  StoreControlLink,
  SwitchNode,
  ToggleSwitch,
} from "../../styledComponents/searchScreen/storeControlSC";

export const StoreControlComp = ({ noPadding }) => {
  const productSearch = useSelector((state) => state.productSearch);
  const { products } = productSearch;
  return (
    <StoreControl id="StoreControl" noPadding={noPadding}>
      <ul>
        <ul>
          <li>
            <StoreControlLink
              current={true}
              id="StoreControlLink"
              href="https://www.muscleandstrength.com/store/search?q=The+Ripper"
            >
              <span class="store-control__link__title">Store</span>
              <span class="store-control__link__count">
                ({products.length})
              </span>
            </StoreControlLink>
          </li>
          <ToggleSwitch id="ToggleSwitch">
            <a
              href="https://www.muscleandstrength.com/store/search/articles?q=The+Ripper"
              class="products"
            >
              <SwitchNode id="SwitchNode" />
            </a>
          </ToggleSwitch>
          <li>
            <StoreControlLink
              id="StoreControlLink"
              href="https://www.muscleandstrength.com/store/search/articles?q=The+Ripper"
            >
              <span class="store-control__link__title">Articles</span>
              <span class="store-control__link__count">(0)</span>
            </StoreControlLink>
          </li>
        </ul>
      </ul>
    </StoreControl>
  );
};
