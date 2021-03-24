import { RootState } from "../parent";
import { createSelector } from "@reduxjs/toolkit";

export const getLoginState = (state: RootState) => state.login;

export const getLoggedInStatus = createSelector(getLoginState, (state): boolean => {
    if (state.apiConfig.appApiKey === "" || state.apiConfig.appApiSecret === "" || state.apiConfig.tokenEndpoint === "") {
        return false;
    }
    return state.loggedIn;
});
