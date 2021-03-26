import { actions as accountActions } from "./account/slicer";
import { actions as assetActions } from "./asset/slicer";
import { actions as positionsActions } from "./positions/slicer";
import { actions as ordersActions } from "./orders/slicer";
import { actions as loginActions } from "./login/slicer";

import { takeLatest } from "redux-saga/effects";
import { getAccount, getPortfolioHistory } from "./account/sagas";
import { getStonkSymbol } from "./asset/sagas";
import { getAccountConfiguration } from "./account/sagas";
import { getPosition, closePosition } from "./positions/sagas";
import { createOrder, getOrders, cancelOrder } from "./orders/sagas";
import { configureApi } from "./login/sagas";

export const sagas = () => [
    takeLatest(loginActions.loginSubmitted, configureApi),
    takeLatest(accountActions.getAccountInfo, getAccount),
    takeLatest(assetActions.getSymbol, getStonkSymbol),
    takeLatest(accountActions.getAccountConfiguration, getAccountConfiguration),
    takeLatest(accountActions.getPortfolioHistory, getPortfolioHistory),
    takeLatest(positionsActions.getPosition, getPosition),
    takeLatest(positionsActions.closePosition, closePosition),
    takeLatest(ordersActions.createOrder, createOrder),
    takeLatest(ordersActions.getOrders, getOrders),
    takeLatest(ordersActions.cancelOrder, cancelOrder),
];
