import React from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { actions as assetActions } from "src/services/alpaca/asset/slicer";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
import { Input } from "src/common/components/Input";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import styled, { css } from "styled-components/native";
import { color } from "src/common/constants";

const Header = styled.View`
    width: 100%;
    flex-flow: row nowrap;
`;
const fetchBtnStyles = css`
    background-color: ${color.darkBlue};
    color: white;
    padding: 8px;
    border-radius: 6px;
    margin-left: 10px;
`;
export interface GetAssetProps {
    getSymbolInfo: (stonk: string) => void;
}
export interface GetAssetState {
    symbol: string;
}
export class GetAsset extends React.PureComponent<GetAssetProps, GetAssetState> {
    state = { symbol: "" };
    public onPressGetSymbol = () => {
        this.props.getSymbolInfo(this.state.symbol.toUpperCase());
    };
    public onChangeSymbol = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        this.setState({ symbol: event.nativeEvent.text });
    };
    public render() {
        return (
            <Card>
                <Header>
                    <Input
                        value={this.state.symbol.toUpperCase()}
                        placeholder={"Ticker Symbol"}
                        onChange={this.onChangeSymbol}
                    />
                    <Text onPress={this.onPressGetSymbol} styles={fetchBtnStyles}>
                        Get
                    </Text>
                </Header>
            </Card>
        );
    }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getSymbolInfo: (stonk: string) => {
            dispatch(assetActions.getSymbol(stonk));
        },
    };
};

export default connect(null, mapDispatchToProps)(GetAsset);
