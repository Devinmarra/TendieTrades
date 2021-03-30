import { actions } from "./slicer";
import { call, put, select } from "redux-saga/effects";
import { configureAlpacaApi } from "../utilities";
import { getLoginConfig } from "./selectors";
import { actions as accountActions } from "../account/slicer";
export function* configureApi() {
    try {
        const config = yield select(getLoginConfig);
        yield call(configureAlpacaApi, config);
        // very crude until oAuth is implemented
        yield put(actions.loginCompleted(true));
        yield put(accountActions.getAccountInfo());
    } catch (e) {
        console.log(e);
        yield put(actions.loginCompleted(false, e));
    }
}
