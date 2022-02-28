
export const initialState = {
  buttonConfig: { disabled: true, label: "Next" },
  itemsConfig: {
    item0: false,
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
    item8: false,
    item9: false,
    item10: false,
  },
  errors: {
    name: { touched: false, error: false, validated: false },
    email: { touched: false, error: false, validated: false },
    phone: { touched: false, error: false, validated: false }
  }
};
export const reducer = (state, action) => {

  switch (action.type) {
    case "buttonset":
      return {
        ...state,
        buttonConfig: action.payload,
      };
    case "itemset":
      return {
        ...state,
        itemsConfig: action.payload,
      };
      case "errorSet":
        return {
          ...state,
          errors: action.payload,
        };
    default:
      return state;
  }
};
