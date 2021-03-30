import { RootState } from "../parent";
import { createSelector } from "@reduxjs/toolkit";
import { ApiConfig } from "../types";

export const getLoginState = (state: RootState) => state.login;

export const getLoginConfig = createSelector(
    getLoginState,
    (state): ApiConfig => {
        return state.apiConfig;
    },
);

export const getLoggedInStatus = createSelector(getLoginState, (state): boolean => {
    if (state.apiConfig.appApiKey === "" || state.apiConfig.appApiSecret === "" || state.apiConfig.tokenEndpoint === "") {
        return false;
    }
    return state.loggedIn;
});

export const getPaperTrading = createSelector(getLoginState, (state): boolean => {
    return state.apiConfig.paperTrading;
});
