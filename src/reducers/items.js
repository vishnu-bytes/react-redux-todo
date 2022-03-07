const items = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "UPDATE_ITEM":
      return state.map((item) =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      );
    case "EDIT_ITEM":
      console.log(action);
      return state.map((item) =>
        item.id !== action.id ? { ...item, text: action.text } : item.id
      );
    case "DLT_ITEM":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default items;
