import * as z from "zod";
import { alpaca } from "../utilities";
import { CreateOrderRequest, zOrderDetails, GetOrdersRequest } from "./types";

type ZodAny = z.infer<z.ZodAny>;

export const createOrderApi = (request: CreateOrderRequest) => {
    const api = () => alpaca.createOrder(request).then((result: ZodAny) => result);
    return new Promise((resolve, reject) => {
        api()
            .then((result: ZodAny) => {
                if (zOrderDetails.parse(result)) {
                    return resolve(result);
                }
            })
            .catch((error: Error) => reject(error));
    });
};

export const getOrdersApi = (request: GetOrdersRequest) => {
    const api = () => alpaca.getOrders(request).then((result: ZodAny) => result);
    return new Promise((resolve, reject) => {
        api()
            .then((result: ZodAny) => {
                if (z.array(zOrderDetails).parse(result)) {
                    return resolve(result);
                }
            })
            .catch((error: Error) => reject(error));
    });
};

export const getOrderByIDApi = (request: string) => {
    const api = () => alpaca.getOrder(request).then((result: ZodAny) => result);
    return new Promise((resolve, reject) => {
        api()
            .then((result: ZodAny) => {
                if (z.array(zOrderDetails).parse(result)) {
                    return resolve(result);
                }
            })
            .catch((error: Error) => reject(error));
    });
};

export const cancelOrderApi = (request: string) => {
    const api = () => alpaca.cancelOrder(request).then((result: ZodAny) => result);
    return new Promise((resolve, reject) => {
        api()
            .then((result: ZodAny) => {
                //if (z.array(zOrderDetails).parse(result)) {
                return resolve(result);
                // }
            })
            .catch((error: Error) => reject(error));
    });
};

export const cancelAllOrdersApi = () => {
    const api = () => alpaca.cancelAllOrders().then((result: ZodAny) => result);
    return new Promise((resolve, reject) => {
        api()
            .then((result: ZodAny) => {
                //if (z.array(zOrderDetails).parse(result)) {
                return resolve(result);
                // }
            })
            .catch((error: Error) => reject(error));
    });
};
