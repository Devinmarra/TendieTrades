import { RootState } from "./parent";
import { createSelector } from "@reduxjs/toolkit";
import { SymbolInfo, LastTrade, LastQuote, Bars } from "./types";

export const getAsset = (state: RootState) => state.asset;
export const getSymbolInfo = createSelector(
    getAsset,
    (state): SymbolInfo => {
        return state.symbol;
    },
);
export const getLastTrade = createSelector(
    getAsset,
    (state): LastTrade => {
        return state.lastTrade;
    },
);
export const getLastQuote = createSelector(
    getAsset,
    (state): LastQuote => {
        return state.lastQuote;
    },
);
export const getBars = createSelector(
    getAsset,
    (state): Bars => {
        return state.bars;
    },
);
