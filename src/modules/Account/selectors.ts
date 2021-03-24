import { RootState } from "./parent";
import { createSelector } from "@reduxjs/toolkit";

export const getAccountState = (state: RootState) => state.account;
export const getAccountDetails = createSelector(getAccountState, (state) => {
    if (!state.details) {
        return {
            buyingPower: "0",
            cash: "0",
            portfolioValue: "0",
        };
    }
    const deets = {
        buyingPower: state.details.buying_power,
        cash: state.details.cash,
        portfolioValue: state.details.portfolio_value,
    };
    return deets;
});
