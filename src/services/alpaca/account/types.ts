import * as z from "zod";

// TODO, some of these need to be converted to number / date, etc
export const zAccountApiResponse = z.object({
    account_blocked: z.boolean(),
    account_number: z.string(),
    buying_power: z.string(),
    cash: z.string(),
    created_at: z.string(),
    currency: z.string(),
    daytrade_count: z.number(),
    daytrading_buying_power: z.string(),
    equity: z.string(),
    id: z.string(),
    initial_margin: z.string(),
    last_equity: z.string(),
    last_maintenance_margin: z.string(),
    long_market_value: z.string(),
    maintenance_margin: z.string(),
    multiplier: z.string(),
    pattern_day_trader: z.boolean(),
    portfolio_value: z.string(),
    regt_buying_power: z.string(),
    short_market_value: z.string(),
    shorting_enabled: z.boolean(),
    sma: z.string(),
    status: z.string(),
    trade_suspended_by_user: z.boolean(),
    trading_blocked: z.boolean(),
    transfers_blocked: z.boolean(),
});
export const zAccountInfo = zAccountApiResponse.extend({
    buying_power: z.number(),
    regt_buying_power: z.number(),
    daytrading_buying_power: z.number(),
    cash: z.number(),
    portfolio_value: z.number(),
    equity: z.number(),
    last_equity: z.number(),
    long_market_value: z.number(),
    maintenance_margin: z.number(),
    short_market_value: z.number(),
    initial_margin: z.number(),
    last_maintenance_margin: z.number(),
    sma: z.number(),
});
export type AccountApiResponse = z.infer<typeof zAccountApiResponse>;
export type AccountInfo = z.infer<typeof zAccountInfo>;

export const zAccountConfigResponse = z.object({
    dtbp_check: z.string(),
    fractional_trading: z.boolean(),
    max_margin_multiplier: z.string(),
    no_shorting: z.boolean(),
    pdt_check: z.string(),
    suspend_trade: z.boolean(),
    trade_confirm_email: z.string(),
});
export type AccountConfig = z.infer<typeof zAccountConfigResponse>;

export interface AcctActivitiesRequest {
    activityTypes: string | string[]; // Any valid activity type
    until: string;
    after: string;
    direction: string;
    date: string;
    pageSize: number;
    pageToken: string;
}

export interface PortfolioHistoryRequest {
    date_start?: string; //Date;
    date_end?: string;
    period: "1M" | "3M" | "6M" | "1A" | "all" | "intraday";
    timeframe: "5Min" | "15Min" | "1H" | "1D";
    extended_hours: boolean;
}
export const zPortfolioHistory = z.object({
    base_value: z.number(),
    equity: z.array(z.number()),
    profit_loss: z.array(z.number()),
    profit_loss_pct: z.array(z.number()),
    timeframe: z.string(),
    timestamp: z.array(z.number()),
});
export type PortfolioHistory = z.infer<typeof zPortfolioHistory>;
