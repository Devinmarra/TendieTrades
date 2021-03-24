import { actions } from "./slicer";
import { call, put } from "redux-saga/effects";
import { configureAlpacaApi } from "../utilities";
import { ApiConfig } from "../types";

export function* configureApi(action: ReturnType<typeof actions.configureApi>) {
    try {
        const config: ApiConfig = {
            appApiKey: action.payload.appApiKey,
            appApiSecret: action.payload.appApiSecret,
            paperTrading: action.payload.paperTrading,
            usePolygon: action.payload.usePolygon,
        };
        yield call(configureAlpacaApi, config);
        // very crude until oAuth is implemented
        yield put(actions.loginCompleted(true));
    } catch (e) {
        console.log(e);
        yield put(actions.loginCompleted(false, e));
    }
}
