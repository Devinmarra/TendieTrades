import React from "react";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { getAccountDetails } from "../selectors";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
import { fields as allFields, AccountField } from "../constants";
import styled from "styled-components/native";
import { currency } from "src/common/utilities";
import { getPaperTrading } from "src/services/alpaca/login/selectors";

const Field = styled.View`
    padding: 5px;
    margin-bottom: 5px;
    flex-flow: row nowrap;
    justify-content: space-between;
`;

const getTitle = (key: string) => {
    return allFields.find((f: AccountField) => f.key === key)?.title;
};
export interface OverviewProps {
    buyingPower: number;
    equity: number;
    totalPositionValue: number;
    paperTrading: boolean;
}
export class Overview extends React.PureComponent<OverviewProps> {
    public render() {
        return (
            <Card>
                <Text>{this.props.paperTrading ? "Paper" : "Market"} Trading</Text>
                <Field>
                    <Text>{getTitle("buying_power")}</Text>
                    <Text bold>{currency(this.props.buyingPower)}</Text>
                </Field>
                <Field>
                    <Text>Total Position Value</Text>
                    <Text bold>{currency(this.props.totalPositionValue)}</Text>
                </Field>
            </Card>
        );
    }
}

export const mapStateToProps = (state: RootState) => {
    const deets = getAccountDetails(state);
    return {
        paperTrading: getPaperTrading(state),
        equity: deets.equity,
        buyingPower: deets.buying_power,
        totalPositionValue: deets.long_market_value - deets.short_market_value,
    };
};
export const mapDispatchToProps = (_dispatch: Dispatch) => {
    return {
        // getAccountInfo: () => {
        //     dispatch(accountActions.getAccountInfo());
        // },
        // getPortfolioHistory: () => {
        //     dispatch(accountActions.getPortfolioHistory());
        // },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
