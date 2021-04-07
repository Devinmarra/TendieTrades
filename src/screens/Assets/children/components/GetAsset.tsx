import React from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { actions as assetActions } from "src/services/alpaca/asset/slicer";
import { Card } from "src/common/components/Card";
import { Input } from "src/common/components/Input";
import { NativeSyntheticEvent, TextInputChangeEventData, PressableProps } from "react-native";
import styled from "styled-components/native";
import { Timeframe, BarsOptions } from "src/services/alpaca/asset/types";
import { Button } from "src/common/components/Button";
import { timeOptions } from "../constants";
import SelectionBar from "src/common/components/SelectionBar";

const Header = styled.View`
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
`;

export interface GetAssetProps {
    getSymbolInfo: (stonk: string, timeframe: Timeframe) => void;
}
export interface GetAssetState {
    symbol: string;
    timeframe: Timeframe;
    options?: BarsOptions;
}

export class GetAsset extends React.PureComponent<GetAssetProps, GetAssetState> {
    state = { symbol: "", timeframe: "1Min" as Timeframe, options: undefined };
    public onPressGetSymbol = () => {
        if (this.state.symbol !== "") {
            this.props.getSymbolInfo(this.state.symbol.toUpperCase(), this.state.timeframe);
        }
    };
    public onChangeSymbol = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        this.setState({ symbol: event.nativeEvent.text });
    };
    public onPressTime = (_event: NativeSyntheticEvent<PressableProps>, value?: string) => {
        this.setState({ timeframe: value as Timeframe });
        if (this.state.symbol) {
            this.onPressGetSymbol();
        }
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
                    <SelectionBar options={timeOptions} selected={this.state.timeframe} onPress={this.onPressTime} />
                    <Button onPress={this.onPressGetSymbol} type="button" primary label="Get" />
                </Header>
            </Card>
        );
    }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getSymbolInfo: (stonk: string, timeframe: Timeframe) => {
            dispatch(assetActions.getSymbol({ stonk, timeframe }));
        },
    };
};

export default connect(null, mapDispatchToProps)(GetAsset);
