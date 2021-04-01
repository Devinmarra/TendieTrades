import { RootState } from "./parent";
import { createSelector } from "@reduxjs/toolkit";
import { Position } from "./types";

export const getPositionsState = (state: RootState) => state.positions;
export const getPositions = createSelector(getPositionsState, (state): Position[] => {
    return state.positions;
});
