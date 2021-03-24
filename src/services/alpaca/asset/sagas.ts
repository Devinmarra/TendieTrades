import { actions } from "./slicer";
import { call, put } from "redux-saga/effects";
import { getSymbolApi, getLastTradeApi, getLastQuoteApi, getBarsApi } from "./api";

export function* getStonkSymbol(action: ReturnType<typeof actions.getSymbol>) {
    try {
        const symbolInfo = yield call(getSymbolApi, action.payload);
        yield put(actions.symbolUpdated(symbolInfo));

        const lastTrade = yield call(getLastTradeApi, action.payload);
        yield put(actions.lastTradeUpdated(lastTrade));

        const lastQuote = yield call(getLastQuoteApi, action.payload);
        yield put(actions.lastQuoteUpdated(lastQuote));

        // TODO: Make these values configurable
        // TODO: Figure out if the "end" value actually does anything, can't tell.
        const bars = yield call(getBarsApi, [action.payload], "1Min", "end");
        yield put(actions.barsUpdated(bars));
    } catch (error) {
        console.log(error);
    }
}
