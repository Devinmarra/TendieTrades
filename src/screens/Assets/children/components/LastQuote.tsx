import React from "react";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
import styled from "styled-components/native";
import { LastQuote as LastQuoteType } from "src/services/alpaca/asset/types";
import { getLastQuote } from "src/services/alpaca/asset/selectors";
import { currency } from "src/common/utilities";

const Header = styled.View`
    margin-bottom: 20px;
`;

export type LastQuoteProps = LastQuoteType;

export class LastQuote extends React.PureComponent<LastQuoteProps> {
    public render() {
        if (!this.props.symbol) {
            return null;
        }
        return (
            <Card>
                <Header>
                    <Text bold>Last Quote</Text>
                </Header>

                <Text>Ask Price: {currency(this.props.last.askprice)}</Text>
                <Text>Ask Size: {this.props.last.asksize}</Text>
                <Text>Bid Pice: {this.props.last.bidprice}</Text>
                <Text>Bid Size: {this.props.last.bidsize}</Text>
            </Card>
        );
    }
}

export const mapStateToProps = (state: RootState) => {
    const deets = getLastQuote(state);
    return {
        ...deets,
    };
};
export const mapDispatchToProps = (_dispatch: Dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LastQuote);
