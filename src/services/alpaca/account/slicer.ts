import { createSlice } from "@reduxjs/toolkit";
import { AccountConfig, PortfolioHistory, AccountInfo } from "./types";

export interface State {
    details: AccountInfo;
    accountConfig?: AccountConfig;
    portfolioHistory?: PortfolioHistory;
}

export const initialState: State = {
    details: {
        id: "",
        account_number: "",
        status: "",
        currency: "",
        buying_power: 0,
        regt_buying_power: 0,
        daytrading_buying_power: 0,
        cash: 0,
        portfolio_value: 0,
        pattern_day_trader: false,
        trading_blocked: true,
        transfers_blocked: true,
        account_blocked: true,
        created_at: "",
        trade_suspended_by_user: true,
        multiplier: 0,
        shorting_enabled: false,
        equity: 0,
        last_equity: 0,
        long_market_value: 0,
        short_market_value: 0,
        initial_margin: 0,
        maintenance_margin: 0,
        last_maintenance_margin: 0,
        sma: 0,
        daytrade_count: 0,
    },
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
            prepare: (accountInfo: AccountInfo) => ({
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
