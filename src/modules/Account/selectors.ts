import { RootState } from "./parent";
import { createSelector } from "@reduxjs/toolkit";
import { AccountInfo } from "src/services/alpaca/account/types";

export const getAccountState = (state: RootState) => state.account;
export const getAccountDetails = createSelector(
    getAccountState,
    (state): AccountInfo => {
        const defaults = {
            id: "",
            account_number: "",
            status: "",
            currency: "",
            buying_power: "0",
            regt_buying_power: "0",
            daytrading_buying_power: "0",
            cash: "0",
            portfolio_value: "0",
            pattern_day_trader: false,
            trading_blocked: false,
            transfers_blocked: false,
            account_blocked: false,
            created_at: "",
            trade_suspended_by_user: false,
            multiplier: "",
            shorting_enabled: false,
            equity: "0",
            last_equity: "0",
            long_market_value: "0",
            short_market_value: "0",
            initial_margin: "0",
            maintenance_margin: "0",
            last_maintenance_margin: "0",
            sma: "0",
            daytrade_count: 0,
        };
        return {
            ...defaults,
            ...state.details,
        };
    },
);
