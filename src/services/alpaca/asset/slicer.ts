import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SymbolInfo, LastTrade, LastQuote, Bars } from "./types";

export interface State {
    symbol?: SymbolInfo;
    lastTrade?: LastTrade;
    lastQuote?: LastQuote;
    bars?: Bars;
}

export const initialState: State = {};

// TODO: This is pretty nutty, break this up somehow
export const { actions, reducer, name } = createSlice({
    initialState,
    name: "asset",
    reducers: {
        getSymbol(state, _action: PayloadAction<string>) {
            state;
        },

        symbolUpdated: {
            reducer: (state, action) => {
                state.symbol = action.payload;
            },
            prepare: (payload: SymbolInfo) => ({
                payload,
                error: false,
                meta: {},
            }),
        },
        lastTradeUpdated: {
            reducer: (state, action) => {
                state.lastTrade = action.payload;
            },
            prepare: (payload: LastTrade) => ({
                payload,
                error: false,
                meta: {},
            }),
        },
        lastQuoteUpdated: {
            reducer: (state, action) => {
                state.lastQuote = action.payload;
            },
            prepare: (payload: LastQuote) => ({
                payload,
                error: false,
                meta: {},
            }),
        },
        barsUpdated: {
            reducer: (state, action) => {
                state.bars = action.payload;
            },
            prepare: (payload: Bars) => ({
                payload,
                error: false,
                meta: {},
            }),
        },
    },
});
