import { useReducer, createContext } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD') {
    const cartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (cartIndex > -1) {
      const existingItem = state.items[cartIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }
  if (action.type === 'REMOVE') {
    const cartInd = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[cartInd];
    const updatedItems = [...state.items];
    if (existingItem.quantity === 1) {
      updatedItems.splice(cartInd, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[cartInd] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    cartDispatch({ type: 'ADD', item });
  }

  function removeItem(id) {
    cartDispatch({ type: 'REMOVE', id });
  }

  const cartContext = {
    items: cartState.items,
    addItem,
    removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
