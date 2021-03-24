import { RootState } from "./parent";

export const getAsset = (state: RootState) => state.asset.symbol;
