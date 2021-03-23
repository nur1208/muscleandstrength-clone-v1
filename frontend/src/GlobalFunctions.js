export const BIGGER_THAN_CALL_DL = 3;
const st = document.getElementsByTagName("style");
let deleteSt;

export const deleteLastStyle = () => {
  deleteSt = st[1];
  // const st = document.getElementsByTagName("style");
  console.log("deleteSt = ", deleteSt);
  console.log(st.length);
  if (st.length > BIGGER_THAN_CALL_DL) {
    // delete require.cache[require.resolve("../styles/home.css")];
    // require.resolve("../styles/home.css");
    if (st[1]) st[1].parentNode.removeChild(st[1]);
  }
  if (st.length > BIGGER_THAN_CALL_DL) console.log("here");
};
