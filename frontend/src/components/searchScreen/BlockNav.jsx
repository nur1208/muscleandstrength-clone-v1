import {
  BlockLayeredNav,
  BlockContent,
} from "../../styledComponents/searchScreen/blockNavSC";
import { BlockSubtitle } from "./BlockSubtitle";
import { ContentFilters } from "./ContentFilters";

export const BlockNav = () => {
  return (
    <BlockLayeredNav id="BlockLayeredNav">
      <BlockContent id="BlockContent">
        <BlockSubtitle />
        <ContentFilters />
      </BlockContent>
    </BlockLayeredNav>
  );
};
