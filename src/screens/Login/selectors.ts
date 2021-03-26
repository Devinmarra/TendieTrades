import { createSelector } from "@reduxjs/toolkit";
import { getLoginState } from "src/services/alpaca/login/selectors";

export const getDefaultLoginState = createSelector(getLoginState, (state) => {
    return {
        appApiKey: state.apiConfig.appApiKey,
        appApiSecret: state.apiConfig.appApiSecret,
        paperTrading: state.apiConfig.paperTrading,
        usePolygon: state.apiConfig.usePolygon,
    };
});
