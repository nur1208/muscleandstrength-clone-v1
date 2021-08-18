import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDealFields } from "../../utils/adminDealFields";

export const DateField = ({
  title,
  value,
  onChangeFunction,
}) => {
  useEffect(() => {
    console.log(typeof value);
    console.log(value instanceof Date);
  }, [value]);
  return (
    <>
      <label htmlFor="dataPicker">{title}:</label>
      <DatePicker
        id="dataPicker"
        placeholderText={`Select ${title}`}
        selected={value}
        onChange={(date) => onChangeFunction(date)}
      />
    </>
  );
};
