export function getThisWeek() {
  const curr = new Date(); // get current date
  const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  const last = first + 6; // last day is the first day + 6

  const firstDay = new Date(curr.setDate(first)).toISOString();
  const lastDay = new Date(curr.setDate(last)).toISOString();
  return { firstDay, lastDay };
}
