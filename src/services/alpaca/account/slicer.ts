import { createSlice } from "@reduxjs/toolkit";
import { AccountApiResponse, AccountConfig, PortfolioHistory } from "./types";

export interface State {
    details?: AccountApiResponse;
    accountConfig?: AccountConfig;
    portfolioHistory?: PortfolioHistory;
}

export const initialState: State = {
    details: undefined,
    accountConfig: undefined,
    portfolioHistory: undefined,
};

// TODO: This is pretty nutty, break this up somehow
export const { actions, reducer, name } = createSlice({
    initialState,
    name: "account",
    reducers: {
        getAccountInfo(state) {
            state;
        },
        getAccountConfiguration(state) {
            state;
        },
        getPortfolioHistory(state) {
            state;
        },
        accountInfoUpdated: {
            reducer: (state, action) => {
                state.details = action.payload;
            },
            prepare: (accountInfo: AccountApiResponse) => ({
                payload: accountInfo,
                error: false,
                meta: {},
            }),
        },
        accountConfigUpdated: {
            reducer: (state, action) => {
                state.accountConfig = action.payload;
            },
            prepare: (payload: AccountConfig) => ({
                payload,
                error: false,
                meta: {},
            }),
        },
        portfolioHistoryUpdated: {
            reducer: (state, action) => {
                state.portfolioHistory = action.payload;
            },
            prepare: (payload: PortfolioHistory) => ({
                payload,
                error: false,
                meta: {},
            }),
        },
    },
});
