export const likeFilter = (array, id) => {
  const result = array.filter((val) => val.pokemon_id == id);
  return result;
};
