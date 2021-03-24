import * as z from "zod";
import { alpaca } from "../utilities";

type ZodAny = z.infer<z.ZodAny>;

export const getPositionApi = (symbol: string) => {
    const api = () => alpaca.getPosition(symbol).then((result: ZodAny) => result);

    return new Promise((resolve, reject) => {
        api()
            .then((result: ZodAny) => {
                // if (zLastQuote.parse(result)) {
                return resolve(result);
                // }
            })
            .catch((error: Error) => reject(error));
    });
};

export const getAllPositionsApi = () => {
    const api = () => alpaca.getPositions().then((result: ZodAny) => result);

    return new Promise((resolve, reject) => {
        api()
            .then((result: ZodAny) => {
                // if (zLastQuote.parse(result)) {
                return resolve(result);
                // }
            })
            .catch((error: Error) => reject(error));
    });
};

export const closePositionApi = (symbol: string) => {
    const api = () => alpaca.closePosition(symbol).then((result: ZodAny) => result);

    return new Promise((resolve, reject) => {
        api()
            .then((result: ZodAny) => {
                // if (zLastQuote.parse(result)) {
                return resolve(result);
                // }
            })
            .catch((error: Error) => reject(error));
    });
};

export const closeAllPositionsApi = () => {
    const api = () => alpaca.closeAllPositions().then((result: ZodAny) => result);

    return new Promise((resolve, reject) => {
        api()
            .then((result: ZodAny) => {
                // if (zLastQuote.parse(result)) {
                return resolve(result);
                // }
            })
            .catch((error: Error) => reject(error));
    });
};
