import * as z from "zod";

export const zPositionApiResponse = z.object({
    asset_class: z.string(),
    asset_id: z.string(),
    avg_entry_price: z.string(),
    change_today: z.string(),
    cost_basis: z.string(),
    current_price: z.string(),
    exchange: z.string(),
    lastday_price: z.string(),
    market_value: z.string(),
    qty: z.string(),
    side: z.string(),
    symbol: z.string(),
    unrealized_intraday_pl: z.string(),
    unrealized_intraday_plpc: z.string(),
    unrealized_pl: z.string(),
    unrealized_plpc: z.string(),
});
export type PositionApiResponse = z.infer<typeof zPositionApiResponse>;

export const zPositionsApiResponse = z.array(zPositionApiResponse);

export const zPosition = zPositionApiResponse.extend({
    avg_entry_price: z.number(),
    change_today: z.number(),
    cost_basis: z.number(),
    current_price: z.number(),
    lastday_price: z.number(),
    market_value: z.number(),
    qty: z.number(),
    unrealized_intraday_pl: z.number(),
    unrealized_intraday_plpc: z.number(),
    unrealized_pl: z.number(),
    unrealized_plpc: z.number(),
});
export type Position = z.infer<typeof zPosition>;

export const zPositions = z.array(zPosition);
