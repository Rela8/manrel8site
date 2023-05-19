export const dateformatter = (date) => {
  const dt = date.getDate(),
    mn = date.getMonth(),
    yy = date.getFullYear();

  return `${yy}-${mn + 1}-${dt}`;
};
