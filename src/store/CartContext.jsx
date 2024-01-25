import { useReducer } from 'react';

const { createContext } = require('react');

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
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
  }
  if (action.type === 'REMOVE_ITEM') {
    // REMOVE ITEM
  }

  return state;
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });
  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
