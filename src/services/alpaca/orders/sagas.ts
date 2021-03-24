import { actions } from "./slicer";
import { call, put } from "redux-saga/effects";
import { createOrderApi, getOrdersApi, getOrderByIDApi, cancelOrderApi, cancelAllOrdersApi } from "./api";
import { CreateOrderRequest, GetOrdersRequest } from "./types";

export function* createOrder(_action: ReturnType<typeof actions.createOrder>) {
    try {
        // TODO: All the different order types
        const request: CreateOrderRequest = {
            symbol: "AMC",
            qty: 5,
            side: "buy",
            type: "market",
            time_in_force: "day",
        };
        const response = yield call(createOrderApi, request);
        yield put(actions.orderCompleted(response));
    } catch (error) {
        console.log(error);
    }
}

export function* getOrders(_action: ReturnType<typeof actions.getOrders>) {
    try {
        // TODO: All the different order types
        const request: GetOrdersRequest = {
            status: "all",
            after: "2021-03-17T15:04:05Z",
            // until: "2021-03-19T15:04:05Z",
            limit: 0,
            direction: "asc",
        };
        const orderID = undefined;
        if (orderID) {
            const response = yield call(getOrderByIDApi, "12345");
            console.log(response);
        } else {
            const response = yield call(getOrdersApi, request);
            console.log(response);
        }
        // yield put(actions.orderCompleted(response));
    } catch (error) {
        console.log(error);
    }
}
export function* cancelOrder(action: ReturnType<typeof actions.cancelOrder>) {
    try {
        if (action.payload) {
            const response = yield call(cancelOrderApi, action.payload);
            console.log(response);
        } else {
            const response = yield call(cancelAllOrdersApi);
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }
}
