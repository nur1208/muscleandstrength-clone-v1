export const addOther = (text, array, setText, setArray) => {
  if (text) {
    setArray([...array, text]);
    setText("");
  }
};
