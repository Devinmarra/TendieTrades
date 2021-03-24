import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { OrderDetails } from "./types";

export interface State {
    orderDetails?: OrderDetails;
}

export const initialState: State = {
    orderDetails: undefined,
};

// TODO: This is pretty nutty, break this up somehow
export const { actions, reducer, name } = createSlice({
    initialState,
    name: "orders",
    reducers: {
        createOrder(state, _action: PayloadAction<string>) {
            state;
        },
        getOrders(state, _action: PayloadAction<string>) {
            state;
        },
        cancelOrder(state, _action: PayloadAction<string>) {
            state;
        },
        orderCompleted: {
            reducer: (state, action) => {
                state.orderDetails = action.payload;
            },
            prepare: (payload: OrderDetails) => ({
                payload,
                error: false,
                meta: {},
            }),
        },
    },
});
