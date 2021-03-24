import { actions } from "./slicer";
import { call, put } from "redux-saga/effects";
import { getAccountInfoApi, getAccountConfigApi, getPortfolioHistoryApi } from "./api";
import { PortfolioHistoryRequest } from "./types";

export function* getAccount(_action: ReturnType<typeof actions.getAccountInfo>) {
    try {
        const response = yield call(getAccountInfoApi);
        yield put(actions.accountInfoUpdated(response));
    } catch (error) {
        console.log(error);
    }
}

export function* getAccountConfiguration(_action: ReturnType<typeof actions.getAccountConfiguration>) {
    try {
        const response = yield call(getAccountConfigApi);
        yield put(actions.accountConfigUpdated(response));
    } catch (error) {
        console.log(error);
    }
}
export function* getPortfolioHistory(_action: ReturnType<typeof actions.getPortfolioHistory>) {
    try {
        const request: PortfolioHistoryRequest = {
            // date_start: new Date().toString(),
            // date_end: new Date().toString(),
            period: "1M",
            timeframe: "5Min",
            extended_hours: true,
        };
        const response = yield call(getPortfolioHistoryApi, request);
        yield put(actions.portfolioHistoryUpdated(response));
    } catch (error) {
        console.log(error);
    }
}
