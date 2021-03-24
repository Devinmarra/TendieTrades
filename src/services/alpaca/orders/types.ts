import * as z from "zod";

export type OrderType = "market" | "limit" | "stop" | "stop_limit" | "trailing_stop";

export type TimeInForce = "day" | "gtc" | "opg" | "ioc";

export interface CreateOrderRequest {
    symbol: string; // any valid ticker symbol
    qty: number;
    side: "buy" | "sell";
    type: OrderType;
    time_in_force: TimeInForce;
    limit_price?: number;
    stop_price?: number;
    client_order_id?: string;
    extended_hours?: boolean;
    order_class?: string;
    take_profit?: Record<string, unknown>; // TODO
    stop_loss?: Record<string, unknown>; // TODO
    trail_price?: string;
    trail_percent?: string;
}

export const zOrderDetails = z.object({
    asset_class: z.string(),
    asset_id: z.string(),
    canceled_at: z.string().nullable(),
    client_order_id: z.string(),
    created_at: z.string(),
    expired_at: z.string().nullable(),
    extended_hours: z.boolean(),
    failed_at: z.string().nullable(),
    filled_at: z.string().nullable(),
    filled_avg_price: z.string().nullable(),
    filled_qty: z.string().nullable(),
    hwm: z.unknown().nullable(),
    id: z.string(),
    legs: z.unknown().nullable(),
    limit_price: z.unknown().nullable(),
    notional: z.unknown().nullable(),
    order_class: z.string().nullable(),
    order_type: z.string(),
    qty: z.string(),
    replaced_at: z.string().nullable(),
    replaced_by: z.string().nullable(),
    replaces: z.unknown().nullable(),
    side: z.string(),
    status: z.string(),
    stop_price: z.unknown().nullable(),
    submitted_at: z.string(),
    symbol: z.string(),
    time_in_force: z.string(),
    trail_percent: z.unknown().nullable(),
    trail_price: z.unknown().nullable(),
    type: z.string(),
    updated_at: z.string(),
});
export type OrderDetails = z.infer<typeof zOrderDetails>;

export interface GetOrdersRequest {
    status: "open" | "closed" | "all";
    after: string; // Date
    until?: string;
    limit: number;
    direction: "asc" | "desc";
}
