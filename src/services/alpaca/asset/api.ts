import * as z from "zod";
import { zSymbolApiResponse, zLastTrade, zLastQuote, Timeframe, BarsOptions, zBars } from "./types";
import { alpaca } from "../utilities";

type ZodAny = z.infer<z.ZodAny>;

export const getSymbolApi = (symbol: string) => {
    const api = () => alpaca.getAsset(symbol).then((result: ZodAny) => result);
    return new Promise((resolve, reject) => {
        api()
            .then((result: ZodAny) => {
                if (zSymbolApiResponse.parse(result)) {
                    return resolve(result);
                }
            })
            .catch((error: Error) => reject(error));
    });
};

export const getLastTradeApi = (symbol: string) => {
    const api = () => alpaca.lastTrade(symbol).then((result: ZodAny) => result);

    return new Promise((resolve, reject) => {
        api()
            .then((result: ZodAny) => {
                if (zLastTrade.parse(result)) {
                    return resolve(result);
                }
            })
            .catch((error: Error) => reject(error));
    });
};

export const getLastQuoteApi = (symbol: string) => {
    const api = () => alpaca.lastQuote(symbol).then((result: ZodAny) => result);

    return new Promise((resolve, reject) => {
        api()
            .then((result: ZodAny) => {
                if (zLastQuote.parse(result)) {
                    return resolve(result);
                }
            })
            .catch((error: Error) => reject(error));
    });
};

// timeframe is one of
// minute, 1Min, 5Min, 15Min, day or 1D.
// minute is an alias of 1Min. Similarly, day is of 1D.
// Symbols may be a string or an array
// options: limit, start, end, after, until
export const getBarsApi = (symbol: string[], timeframe: Timeframe, config?: BarsOptions) => {
    const api = () => alpaca.getBars(timeframe, symbol, config).then((result: ZodAny) => result);

    return new Promise((resolve, reject) => {
        api()
            .then((result: ZodAny) => {
                if (zBars.parse(result)) {
                    return resolve(result);
                }
            })
            .catch((error: Error) => reject(error));
    });
};
