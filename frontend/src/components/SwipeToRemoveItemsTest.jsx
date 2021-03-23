import React from "react";

export const SwipeToRemoveItemsTest = () => {
  require("../styles/swipToRemoveItemsTes.css");

  return (
    <div id="app">
      <ul class="swipeList" data-reactid=".0">
        {/* <li
          class="swipeItem"
          //   style="height: 65px; transition: height 250ms ease-in-out 0s;"
          data-reactid=".0.0:$swipeItem-1"
        >
          <div
            class="swipeItem-content"
            // style="left: 0px;"
            data-reactid=".0.0:$swipeItem-1.0"
          >
            <img
              src="http://lorempixel.com/350/65/"
              data-reactid=".0.0:$swipeItem-1.0.0"
            />
          </div>
        </li> */}
        <button class="swipeList-addButton" data-reactid=".0.1">
          Add image...
        </button>
      </ul>
    </div>
  );
};
