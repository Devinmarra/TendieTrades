import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Position } from "./types";

export interface State {
    positions: Position[];
}

export const initialState: State = {
    positions: [],
};

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
        positionsUpdated: {
            reducer: (state, action) => {
                state.positions = action.payload;
            },
            prepare: (payload: Position[], error?: Error) => ({
                payload,
                error,
                meta: {},
            }),
        },
    },
});
