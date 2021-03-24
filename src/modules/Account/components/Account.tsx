import React from "react";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { getAccountState, getAccountDetails } from "../selectors";
import { actions as accountActions } from "src/services/alpaca/account/slicer";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";

export interface AccountProps {
    buyingPower: string;
    cash: string;
    portfolioValue: string;
    getAccountInfo: () => void;
    getAccountConfig: () => void;
}
export class Account extends React.PureComponent<AccountProps> {
    // public onPressGetAcct = () => {
    //     this.props.getAccountInfo();
    // };
    public onGetAccountConfig = () => {
        this.props.getAccountConfig();
    };
    public componentDidMount() {
        this.props.getAccountInfo();
    }
    public render() {
        return (
            <Card>
                <Text>Account Info</Text>
                <Text>Portfolio Value: ${this.props.portfolioValue}</Text>
                <Text>Buying Power: ${this.props.buyingPower}</Text>
                <Text>Cash: ${this.props.cash}</Text>
            </Card>
        );
    }
}

export const mapStateToProps = (state: RootState) => {
    const deets = getAccountDetails(state);
    return {
        isTrue: getAccountState(state),
        buyingPower: deets.buyingPower,
        cash: deets.cash,
        portfolioValue: deets.portfolioValue,
    };
};
export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getAccountInfo: () => {
            dispatch(accountActions.getAccountInfo());
        },
        getAccountConfig: () => {
            dispatch(accountActions.getAccountConfiguration());
        },
        getPortfolioHistory: () => {
            dispatch(accountActions.getPortfolioHistory());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
