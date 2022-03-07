let incrementId = 0;

export const addItems = (item) => ({
  type: "ADD_ITEMS",
  id: incrementId++,
  text: item.text,
});

export const updateItem = (id) => ({
  type: "UPDATE_ITEM",
  id,
});
export const edititem = (id, text) => ({
  type: "EDIT_ITEM",
  id,
  text,
});
export const dltItem = (id) => ({
  type: "DLT_ITEM",
  id,
});
