const initialState = {
  sidebarShow: "responsive",
};

export default (state = initialState, { type, ...rest }) => {
  console.log(type);
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};
