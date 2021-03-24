import React from "react";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { actions as positionsActions } from "src/services/alpaca/positions/slicer";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
export interface PositionsProps {
    getPosition: (stonk?: string) => void;
    closePosition: (stonk?: string) => void;
}
export class Positions extends React.PureComponent<PositionsProps> {
    public onPressGetPosition = () => {
        this.props.getPosition();
    };
    public onPressClosePosition = () => {
        this.props.closePosition("AMC");
    };
    public render() {
        return (
            <Card>
                <Text onPress={this.onPressGetPosition}>Get Position</Text>
                <Text onPress={this.onPressClosePosition}>Close position</Text>
            </Card>
        );
    }
}

export const mapStateToProps = (state: RootState) => {
    if (!state) {
        return {};
    }
    return {};
};
export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getPosition: (stonk?: string) => {
            dispatch(positionsActions.getPosition(stonk));
        },
        closePosition: (stonk?: string) => {
            dispatch(positionsActions.closePosition(stonk));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Positions);
