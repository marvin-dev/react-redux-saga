const reducer = (state = {}, action) => {
  switch (action.type) {
    case "OPEN_EDIT_MODAL":
      return { ...state, open: true, id: action.payload.id };
    case "CLOSE_EDIT_MODAL":
      return { ...state, open: false, id: null };
    default:
      return state;
  }
};

export default reducer;
