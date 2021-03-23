import React, { useReducer } from "react";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";

export const NEXT = "NEXT";
export const PREV = "PREV";

const initialState = { pos: 0, sliding: false, dir: NEXT };

const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

export const MySlider = (props) => {
  require("../../styles/swipToRemoveItemsTes.css");
  const [state, dispatch] = useReducer(reducer, initialState);
  const numItems = React.Children.count(props.children);

  const slide = (dir) => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: "stopSliding" });
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const transformStyle = () => {
    if (!state.sliding) return "translateX(calc(-80% - 20px))";
    if (state.dir === PREV) return "translateX(calc(2 * (-80% - 20px)))";
    return "translateX(0%)";
  };

  const CarouselSlot = styled.div`
    flex: 1 0 100%;
    flex-basis: 80%;
    margin-right: 20px;
    order: ${(props) => props.order};
  `;

  return (
    <div id="main" {...handlers} onDragStart={false}>
      <div className="wrapper">
        <div
          className="carousel_container"
          style={{
            transition: `${state.sliding ? "none" : "transform 1s ease"}`,
            transform: transformStyle(),
          }}
        >
          {React.Children.map(props.children, (child, index) => (
            <div
              className="carousel_slot"
              key={index}
              style={{ order: getOrder({ index, pos: state.pos, numItems }) }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <div
        className="slide_btn"
        style={{ float: "left" }}
        onClick={() => slide(PREV)}
      >
        Prev
      </div>
      <div
        className="slide_btn"
        style={{ float: "right" }}
        onClick={() => slide(NEXT)}
      >
        Next
      </div>
    </div>
  );
};

const reducer = (state, { type, numItems }) => {
  switch (type) {
    case "reset":
      return initialState;
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1,
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1,
      };
    case "stopSliding":
      return { ...state, sliding: false };
    default:
      return state;
  }
};
