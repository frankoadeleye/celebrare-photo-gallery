export function favouritesReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVOURITE": {
      const photoId = String(action.payload);

      return state.includes(photoId)
        ? state.filter((id) => id !== photoId)
        : [...state, photoId];
    }

    default:
      return state;
  }
}
