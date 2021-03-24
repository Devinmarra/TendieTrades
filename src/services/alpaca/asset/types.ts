import * as z from "zod";

export type Timeframe = "1Min" | "5Min" | "15Min" | "1D";
export type BarsOptions = "limit" | "start" | "end" | "after" | "until";

// export interface BarsRequestOptions {
//   limit: number;
//   start: string;
//   end: string;
//   adjustment: string;
// }

export const zSymbolApiResponse = z.object({
    class: z.string(),
    easy_to_borrow: z.boolean(),
    exchange: z.string(),
    fractionable: z.boolean(),
    id: z.string(),
    marginable: z.boolean(),
    name: z.string(),
    shortable: z.boolean(),
    status: z.string(),
    symbol: z.string(),
    tradable: z.boolean(),
});
export type SymbolInfo = z.infer<typeof zSymbolApiResponse>;

export const zLastTrade = z.object({
    last: z.object({
        cond1: z.number(),
        cond2: z.number(),
        cond3: z.number(),
        cond4: z.number(),
        exchange: z.number(),
        price: z.number(),
        size: z.number(),
        timestamp: z.number(),
    }),
    status: z.string(),
    symbol: z.string(),
});

export type LastTrade = z.infer<typeof zLastTrade>;

export const zLastQuote = z.object({
    last: z.object({
        askexchange: z.number(),
        askprice: z.number(),
        asksize: z.number(),
        bidexchange: z.number(),
        bidprice: z.number(),
        bidsize: z.number(),
        timestamp: z.number(),
    }),
    status: z.string(),
    symbol: z.string(),
});

export type LastQuote = z.infer<typeof zLastQuote>;

export const zBar = z.object({
    closePrice: z.number(),
    highPrice: z.number(),
    lowPrice: z.number(),
    openPrice: z.number(),
    startEpochTime: z.number(),
    volume: z.number(),
});
export const zBars = z.record(z.array(zBar));
export type Bar = z.infer<typeof zBar>;
export type Bars = z.infer<typeof zBars>;
