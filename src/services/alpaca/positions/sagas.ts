import { actions } from "./slicer";
import { call, put } from "redux-saga/effects";
import { getPositionApi, getAllPositionsApi, closeAllPositionsApi, closePositionApi } from "./api";
import { Position, PositionApiResponse } from "./types";

const transformPosition = (pos: PositionApiResponse): Position => {
    return {
        ...pos,
        avg_entry_price: parseFloat(pos.avg_entry_price),
        change_today: parseFloat(pos.change_today),
        cost_basis: parseFloat(pos.cost_basis),
        current_price: parseFloat(pos.current_price),
        lastday_price: parseFloat(pos.lastday_price),
        market_value: parseFloat(pos.market_value),
        qty: parseFloat(pos.qty),
        unrealized_intraday_pl: parseFloat(pos.unrealized_intraday_pl),
        unrealized_intraday_plpc: parseFloat(pos.unrealized_intraday_plpc),
        unrealized_pl: parseFloat(pos.unrealized_pl),
        unrealized_plpc: parseFloat(pos.unrealized_plpc),
    };
};

export function* getPosition(action: ReturnType<typeof actions.getPosition>) {
    try {
        if (action.payload) {
            const position: PositionApiResponse = yield call(getPositionApi, action.payload);

            yield put(actions.positionsUpdated([transformPosition(position)]));
        } else {
            const positions: PositionApiResponse[] = yield call(getAllPositionsApi);
            const pos = positions.map((p: PositionApiResponse) => transformPosition(p));
            yield put(actions.positionsUpdated(pos));
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
