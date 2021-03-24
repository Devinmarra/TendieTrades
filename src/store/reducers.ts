import {
    combineReducers,
    StateFromReducersMapObject,
    EnhancedStore,
    Middleware,
    Reducer,
    CombinedState,
    AnyAction,
} from "@reduxjs/toolkit";
import { SagaMiddleware } from "redux-saga";
import { name as accountName, reducer as accountReducer } from "../services/alpaca/account/slicer";
import { name as assetName, reducer as asseetReducer } from "../services/alpaca/asset/slicer";
import { name as loginName, reducer as loginReducer } from "../services/alpaca/login/slicer";
import { name as ordersName, reducer as ordersReducer } from "../services/alpaca/orders/slicer";
import { name as positionsName, reducer as positionsReducer } from "../services/alpaca/positions/slicer";

const reducersMap = {
    [accountName]: accountReducer,
    [assetName]: asseetReducer,
    [loginName]: loginReducer,
    [ordersName]: ordersReducer,
    [positionsName]: positionsReducer,
};

export default combineReducers(reducersMap);
export type State = StateFromReducersMapObject<typeof reducersMap>;
export type ReduxState = EnhancedStore<CombinedState<State>, AnyAction, Middleware<SagaMiddleware>[]>;
export type RootReducer = Reducer<CombinedState<State>, AnyAction>;
