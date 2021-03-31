import { RootState } from "./parent";
import { createSelector } from "@reduxjs/toolkit";
import { AccountInfo } from "src/services/alpaca/account/types";

export const getAccountState = (state: RootState) => state.account;
export const getAccountDetails = createSelector(
    getAccountState,
    (state): AccountInfo => {
        return state.details;
    },
);
