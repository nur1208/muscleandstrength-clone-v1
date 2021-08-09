import {
  BlockLayeredNav,
  BlockContent,
} from "../../styledComponents/searchScreen/blockNavSC";
import { BlockSubtitle } from "./BlockSubtitle";
import { ContentFilters } from "./ContentFilters";

export const BlockNav = ({ filtersData }) => {
  return (
    <BlockLayeredNav id="BlockLayeredNav">
      <BlockContent id="BlockContent">
        <BlockSubtitle />
        <ContentFilters filtersData={filtersData} />
      </BlockContent>
    </BlockLayeredNav>
  );
};
