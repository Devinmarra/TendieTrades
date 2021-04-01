import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface State {
    isTrue: boolean;
}

export const initialState: State = {
    isTrue: false,
};

export const { actions, reducer, name } = createSlice({
    initialState,
    name: "testComponent",
    reducers: {
        updateStatus(state, action: PayloadAction<boolean>) {
            state.isTrue = action.payload;
        },
        updateLongStatus: {
            reducer: (state, action) => {
                state.isTrue = action.payload;
            },
            prepare: (status: boolean) => ({
                payload: status,
                error: false,
                meta: {},
            }),
        },
    },
});
