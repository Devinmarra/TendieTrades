import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ApiConfig } from "../types";

export interface State {
    apiConfig: ApiConfig;
    loggedIn: boolean;
}

export const initialState: State = {
    loggedIn: false,
    apiConfig: {
        appApiKey: process.env.REACT_APP_API_KEY || "",
        appApiSecret: process.env.REACT_APP_API_SECRET || "",
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
        configureApi(state, action: PayloadAction<ApiConfig>) {
            state.apiConfig = action.payload;
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
