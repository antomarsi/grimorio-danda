const keyValue = "fav";

export const loadFavorites = () => {
  try {
    const serializedState = localStorage.getItem(keyValue);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
export const saveFavorites = (state: number[]) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(keyValue, serializedState);
  } catch {
    // ignore write errors
  }
};
