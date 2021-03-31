import React from "react";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
import styled from "styled-components/native";
import { LastTrade as LastTradeType } from "src/services/alpaca/asset/types";
import { getLastTrade } from "src/services/alpaca/asset/selectors";
import { currency } from "src/common/utilities";

const Header = styled.View`
    margin-bottom: 20px;
`;

export type LastTradeProps = LastTradeType;

export class LastTrade extends React.PureComponent<LastTradeProps> {
    public render() {
        if (!this.props.symbol) {
            return null;
        }
        return (
            <Card>
                <Header>
                    <Text bold>Last Trade</Text>
                </Header>

                <Text>Price: {currency(this.props.last.price)}</Text>
                <Text>Size: {this.props.last.size}</Text>
                <Text>Exchange: {this.props.last.exchange}</Text>
            </Card>
        );
    }
}

export const mapStateToProps = (state: RootState) => {
    const deets = getLastTrade(state);
    return {
        ...deets,
    };
};
export const mapDispatchToProps = (_dispatch: Dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LastTrade);
