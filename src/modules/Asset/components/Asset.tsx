import React from "react";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { actions as assetActions } from "src/services/alpaca/asset/slicer";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
export interface AssetProps {
    getSymbolInfo: (stonk: string) => void;
}
export class Asset extends React.PureComponent<AssetProps> {
    // TODO: Implement event to get value like a non-smoothbrain
    public onPressGetSymbol = () => {
        this.props.getSymbolInfo("AMC");
    };
    public render() {
        return (
            <Card>
                <Text>Market</Text>
                <Text onPress={this.onPressGetSymbol}>Get Symbol Info</Text>
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
        getSymbolInfo: (stonk: string) => {
            dispatch(assetActions.getSymbol(stonk));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Asset);
