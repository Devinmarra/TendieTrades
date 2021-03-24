import { actions } from "./slicer";
import { call } from "redux-saga/effects";
import { getPositionApi, getAllPositionsApi, closeAllPositionsApi, closePositionApi } from "./api";

export function* getPosition(action: ReturnType<typeof actions.getPosition>) {
    try {
        if (action.payload) {
            const position = yield call(getPositionApi, action.payload);
            console.log(position);
            // yield put(actions.symbolUpdated(symbolInfo));
        } else {
            const positions = yield call(getAllPositionsApi);
            console.log(positions);
            // yield put(actions.symbolUpdated(symbolInfo));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* closePosition(action: ReturnType<typeof actions.closePosition>) {
    try {
        if (action.payload) {
            const result = yield call(closePositionApi, action.payload);
            console.log(result);
            // yield put(actions.symbolUpdated(symbolInfo));
        } else {
            const result = yield call(closeAllPositionsApi);
            console.log(result);
            // yield put(actions.symbolUpdated(symbolInfo));
        }
    } catch (error) {
        console.log(error);
    }
}
