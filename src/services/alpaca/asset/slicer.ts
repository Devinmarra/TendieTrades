import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SymbolInfo, LastTrade, LastQuote, Bars } from "./types";

export interface State {
    symbol: SymbolInfo;
    lastTrade: LastTrade;
    lastQuote: LastQuote;
    bars: Bars;
}

export const initialState: State = {
    symbol: {
        id: "",
        class: "",
        exchange: "",
        symbol: "",
        name: "",
        status: "",
        tradable: false,
        marginable: false,
        shortable: false,
        easy_to_borrow: false,
        fractionable: false,
    },
    lastTrade: {
        status: "",
        symbol: "",
        last: {
            price: 0,
            size: 0,
            exchange: 0,
            cond1: 0,
            cond2: 0,
            cond3: 0,
            cond4: 0,
            timestamp: 0,
        },
    },
    lastQuote: {
        status: "",
        symbol: "",
        last: {
            askprice: 0,
            asksize: 0,
            askexchange: 0,
            bidexchange: 0,
            bidprice: 0,
            bidsize: 0,
            timestamp: 0,
        },
    },
    bars: {},
};

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
