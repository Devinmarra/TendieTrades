import { actions } from "./slicer";
import { call, put } from "redux-saga/effects";
import { getAccountInfoApi, getAccountConfigApi, getPortfolioHistoryApi } from "./api";
import { PortfolioHistoryRequest, AccountApiResponse } from "./types";

export function* getAccount(_action: ReturnType<typeof actions.getAccountInfo>) {
    try {
        const response: AccountApiResponse = yield call(getAccountInfoApi);
        const responseFixed = {
            ...response,
            buying_power: parseFloat(response.buying_power),
            regt_buying_power: parseFloat(response.regt_buying_power),
            daytrading_buying_power: parseFloat(response.daytrading_buying_power),
            cash: parseFloat(response.cash),
            portfolio_value: parseFloat(response.portfolio_value),
            equity: parseFloat(response.equity),
            last_equity: parseFloat(response.last_equity),
            long_market_value: parseFloat(response.long_market_value),
            maintenance_margin: parseFloat(response.maintenance_margin),
            short_market_value: parseFloat(response.short_market_value),
            initial_margin: parseFloat(response.initial_margin),
            last_maintenance_margin: parseFloat(response.last_maintenance_margin),
            sma: parseFloat(response.sma),
            multiplier: parseFloat(response.multiplier),
        };
        yield put(actions.accountInfoUpdated(responseFixed));
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
