import * as z from "zod";
import { ApiConfig } from "./types";
import Alpaca from "@alpacahq/alpaca-trade-api";

type ZodAny = z.infer<z.ZodAny>;
export let alpaca: ZodAny;

export const configureAlpacaApi = (config: ApiConfig) => {
    console.log(config);
    alpaca = new Alpaca({
        keyId: config.appApiKey,
        secretKey: config.appApiSecret,
        paper: config.paperTrading,
        usePolygon: config.usePolygon,
    });
};
