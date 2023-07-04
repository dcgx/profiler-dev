export const toLowerCase = (value) => {
  if (!value || value.length < 1) return value;
  return value.trim().toLowerCase();
};
