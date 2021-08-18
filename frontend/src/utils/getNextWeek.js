export function nextWeek() {
  var today = new Date();
  var nextWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7
  );
  return nextWeek;
}
