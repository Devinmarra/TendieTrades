import { RootState } from "./parent";

export const getPortfolio = (state: RootState) => state.account.portfolioHistory;
