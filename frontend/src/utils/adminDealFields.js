import { useState } from "react";
import { getSavedUserInputDeal } from "../actions/userActions";
import { nextWeek } from "./getNextWeek";

export const useDealFields = () => {
  const savedInput = getSavedUserInputDeal();
  // console.log({
  //   savedInput,
  //   date: new Date(savedInput.selectedDate),
  // });
  const [description, setDescription] = useState(
    savedInput ? savedInput.description : ""
  );
  const [image, setImage] = useState(
    savedInput ? savedInput.image : ""
  );
  const [selectedDate, setSelectedDate] = useState(
    savedInput && savedInput.selectedDate
      ? new Date(savedInput.selectedDate)
      : ""
  );

  const dealFieldsValues = {
    description,
    image,
    selectedDate,
  };
  const formGroups2 = [
    {
      title: "description",
      type: "text",
      placeholder: "Enter Description",
      onChangeFunction: setDescription,
      value: description,
    },
    {
      title: "type",
      type: "text",
      placeholder: "Enter type",
      onChangeFunction: setImage,
      value: image,
    },
    {
      title: "expired date",
      type: "date",
      placeholder: "Enter Expired Date",
      onChangeFunction: setSelectedDate,
      value: selectedDate,
    },
  ];

  const resetAllState = () => {
    setDescription("");
    setImage("");
    setSelectedDate("");
  };

  return {
    formGroups2,
    resetAllState,
    dealFieldsValues,
  };
};
