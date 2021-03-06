import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ApiConfig } from "../types";
import { Base64 } from "js-base64";

export interface State {
    apiConfig: ApiConfig;
    loggedIn: boolean;
}

export const initialState: State = {
    loggedIn: false,
    apiConfig: {
        appApiKey: Base64.encode(process.env.REACT_APP_API_KEY || ""),
        appApiSecret: Base64.encode(process.env.REACT_APP_API_SECRET || ""),
        // dataBaseUrl: process.env.REACT_APP_DATA_BASE_URL || "",
        // authClientID: process.env.REACT_APP_AUTH_CLIENT_ID || "",
        // authClientSecret: process.env.REACT_APP_AUTH_CLIENT_ID || "",
        // authEndpoint: process.env.REACT_APP_AUTHORIZATION_ENDPOINT || "",
        // tokenEndpoint: process.env.REACT_APP_TOKEN_ENDPOINT || "",
        paperTrading: true,
        usePolygon: false,
    },
};

// TODO: This is pretty nutty, break this up somehow
export const { actions, reducer, name } = createSlice({
    initialState,
    name: "login",
    reducers: {
        keyUpdated(state, action: PayloadAction<string>) {
            state.apiConfig.appApiKey = action.payload;
        },
        secretUpdated(state, action: PayloadAction<string>) {
            state.apiConfig.appApiSecret = action.payload;
        },
        paperHandsUpdated(state, action: PayloadAction<boolean>) {
            state.apiConfig.paperTrading = action.payload;
        },
        polygonUpdated(state, action: PayloadAction<boolean>) {
            state.apiConfig.usePolygon = action.payload;
        },
        loginSubmitted(state) {
            state;
        },
        loginCompleted: {
            reducer: (state, action) => {
                state.loggedIn = action.payload;
            },
            prepare: (payload: boolean, error?: Error) => ({
                payload,
                error,
                meta: {},
            }),
        },
    },
});
