import React from "react";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
import styled from "styled-components/native";
import { SymbolInfo } from "src/services/alpaca/asset/types";
import { getSymbolInfo } from "src/services/alpaca/asset/selectors";

const Header = styled.View`
    margin-bottom: 20px;
`;

export type AssetDetailsProps = SymbolInfo;

export class AssetDetails extends React.PureComponent<AssetDetailsProps> {
    public render() {
        if (!this.props.symbol) {
            return null;
        }
        return (
            <Card>
                <Header>
                    <Text bold>{this.props.symbol}</Text>
                    <Text>{this.props.name}</Text>
                </Header>

                <Text>Exchange: {this.props.exchange}</Text>
                <Text>Class: {this.props.class}</Text>
                <Text>Status: {this.props.status}</Text>
                <Text>Tradable: {this.props.tradable.toString()}</Text>
                <Text>Marginable: {this.props.marginable.toString()}</Text>
                <Text>Shortable: {this.props.shortable.toString()}</Text>
                <Text>Easy to Borrow: {this.props.easy_to_borrow.toString()}</Text>
                <Text>Fractionable: {this.props.fractionable.toString()}</Text>
            </Card>
        );
    }
}

export const mapStateToProps = (state: RootState) => {
    const deets = getSymbolInfo(state);
    return {
        ...deets,
    };
};
export const mapDispatchToProps = (_dispatch: Dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetDetails);
