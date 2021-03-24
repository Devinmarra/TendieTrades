import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
    test?: boolean;
}

export const initialState: State = {};

// TODO: This is pretty nutty, break this up somehow
export const { actions, reducer, name } = createSlice({
    initialState,
    name: "positions",
    reducers: {
        getPosition(state, _action: PayloadAction<string | undefined>) {
            state;
        },
        closePosition(state, _action: PayloadAction<string | undefined>) {
            state;
        },
    },
});
