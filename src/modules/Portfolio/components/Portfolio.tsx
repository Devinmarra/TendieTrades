import React from "react";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { actions as accountActions } from "src/services/alpaca/account/slicer";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
export interface PortfolioProps {
    getPortfolioHistory: () => void;
}
export class Portfolio extends React.PureComponent<PortfolioProps> {
    public onPressGetPortfolioHistory = () => {
        this.props.getPortfolioHistory();
    };
    public render() {
        return (
            <Card>
                <Text onPress={this.onPressGetPortfolioHistory}>Get Portfolio History</Text>
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
        getPortfolioHistory: () => {
            dispatch(accountActions.getPortfolioHistory());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
