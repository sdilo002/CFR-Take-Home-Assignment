import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from "../../types/types";

interface ItemsState {
    items: Item[];
}

const initialState: ItemsState = {
    items: []
};
  
export const ItemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
      setItems: (state, action: PayloadAction<Item[]>) => {
        state.items = action.payload;
      }
    }
  });
  
  export const { setItems } = ItemsSlice.actions;
  
  export default ItemsSlice.reducer;
  