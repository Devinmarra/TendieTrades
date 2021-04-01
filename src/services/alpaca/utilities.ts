import * as z from "zod";
import { ApiConfig } from "./types";
import Alpaca from "@alpacahq/alpaca-trade-api";
import { Base64 } from "js-base64";

type ZodAny = z.infer<z.ZodAny>;
export let alpaca: ZodAny;

export const configureAlpacaApi = (config: ApiConfig) => {
    alpaca = new Alpaca({
        keyId: Base64.decode(config.appApiKey),
        secretKey: Base64.decode(config.appApiSecret),
        paper: config.paperTrading,
        usePolygon: config.usePolygon,
    });
};
