export const CapitalizeFirstLetter = (name) => {
  const x = name?.split("");

  if (x && x.length > 0) {
    return x[0]?.toUpperCase() + x?.slice(1).join("");
  }

  return null;
};
