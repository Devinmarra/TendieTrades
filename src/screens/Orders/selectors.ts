import { RootState } from "./parent";

export const getOrders = (state: RootState) => state.orders.orderDetails;
