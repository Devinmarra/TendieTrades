import * as z from "zod";
import {
    zAccountApiResponse,
    zAccountConfigResponse,
    AcctActivitiesRequest,
    PortfolioHistoryRequest,
    zPortfolioHistory,
} from "./types";
import { alpaca } from "../utilities";

type ZodAny = z.infer<z.ZodAny>;

export const getAccountInfoApi = () => {
    const getAccountApi = () => {
        return alpaca.getAccount().then((result: ZodAny) => result);
    };
    return new Promise((resolve, reject) => {
        getAccountApi()
            .then((result: ZodAny) => {
                if (zAccountApiResponse.parse(result)) {
                    return resolve(result);
                }
            })
            .catch((error: Error) => reject(error));
    });
};

export const getAccountConfigApi = () => {
    const getAccountApi = () => {
        return alpaca.getAccountConfigurations().then((result: ZodAny) => result);
    };
    return new Promise((resolve, reject) => {
        getAccountApi()
            .then((result: ZodAny) => {
                if (zAccountConfigResponse.parse(result)) {
                    return resolve(result);
                }
            })
            .catch((error: Error) => reject(error));
    });
};

export const getAccountActivitiesApi = (request: AcctActivitiesRequest) => {
    const getAccountApi = () => {
        return alpaca.getAccountActivities(request).then((result: ZodAny) => result);
    };
    return new Promise((resolve, reject) => {
        getAccountApi()
            .then((result: ZodAny) => {
                // if (zAccountConfigResponse.parse(result)) {
                return resolve(result);
                // }
            })
            .catch((error: Error) => reject(error));
    });
};

export const getPortfolioHistoryApi = (request: PortfolioHistoryRequest) => {
    const getAccountApi = () => {
        return alpaca.getPortfolioHistory(request).then((result: ZodAny) => result);
    };
    return new Promise((resolve, reject) => {
        getAccountApi()
            .then((result: ZodAny) => {
                if (zPortfolioHistory.parse(result)) {
                    return resolve(result);
                }
            })
            .catch((error: Error) => reject(error));
    });
};
/**
 * TODO: Implement
 * updateAccountConfigurations
 * Get portfolio history
 * https://github.com/alpacahq/alpaca-trade-api-js
 */
