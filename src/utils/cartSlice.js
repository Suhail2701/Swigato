import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
    },
    reducers: {
        addItem: (state, action) => {
            // const newItem = action.payload.itemData;
            const newItem = action.payload.itemData;
            let name, id, price, defaultPrice;

            if (newItem) {
                ({ name, id, price, defaultPrice } = newItem.card.info);
            }
            // const {name, id, price, defaultPrice} = newItem?.card?.info;
            const restau = action.payload.items;
            const itemExists = state.items.find((item) => item.id === id);
            const existingItmIndx = state.items.findIndex((itemIndx) => itemIndx.id === id);
            state.totalQuantity++;
            state.totalAmount += price;
            if (!itemExists) {
                state.items.push({
                    item: newItem,
                    id: id,
                    price: price,
                    count: 1
                });
            }
            else {
                state.items[existingItmIndx].count++;
                state.items[existingItmIndx].price += price;
            }
        },

        removeItem: (state, action) => {
            // const newItem = action.payload.itemData;
            const newItem = action.payload.itemData;
            let name, id, price, defaultPrice;

            if (newItem) {
                ({ name, id, price, defaultPrice } = newItem.card.info);
            }
            const restau = action.payload.items;
            const itemExists = state.items.find((item) => item.id === id);
            const existingItmIndx = state.items.findIndex((itemIndx) => itemIndx.id === id);
            state.totalQuantity--;
            state.totalAmount -= price;
            if (state.items[existingItmIndx].count === 1) {
                state.items = state.items.filter((item) => !(item.id === id));
            }
            else {
                state.items[existingItmIndx].count--;
                state.items[existingItmIndx].price -= price;
            }
        },
        clearCart: (state, action) => {
            state.items.length = 0;
            state.totalQuantity = 0;
            state.totalAmount = 0;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;