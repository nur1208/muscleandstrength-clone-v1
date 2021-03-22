const valid = [
  { value: true, meg: "1" },
  { value: true, meg: "2" },
  { value: true, meg: "3" },
  { value: true, meg: "4" },
];
let i = 1;
while (true) {
  if (!valid[i].value) {
    console.log("update " + valid[i].meg);
    break;
  }
  i++;
  if (i === valid.length) i = i % valid.length;
  if (valid[i].meg === "2") valid[i].value = false;
}
