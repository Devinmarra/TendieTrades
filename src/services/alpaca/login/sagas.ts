import { actions } from "./slicer";
import { call, put, select } from "redux-saga/effects";
import { configureAlpacaApi } from "../utilities";
import { getLoginConfig } from "./selectors";
import { actions as accountActions } from "../account/slicer";
import { actions as positionActions } from "../positions/slicer";
import { actions as orderActions } from "../orders/slicer";
export function* configureApi() {
    try {
        const config = yield select(getLoginConfig);
        yield call(configureAlpacaApi, config);
        yield put(actions.loginCompleted(true));
        yield put(accountActions.getAccountInfo());
        yield put(positionActions.getPosition());
        yield put(orderActions.getOrders("open"));
    } catch (e) {
        console.log(e);
        yield put(actions.loginCompleted(false, e));
    }
}
