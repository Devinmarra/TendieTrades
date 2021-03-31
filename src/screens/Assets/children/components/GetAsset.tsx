import React from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { actions as assetActions } from "src/services/alpaca/asset/slicer";
import { Card } from "src/common/components/Card";
import { Input } from "src/common/components/Input";
import { NativeSyntheticEvent, TextInputChangeEventData, PressableProps } from "react-native";
import styled, { css } from "styled-components/native";
import { color } from "src/common/constants";
import { Timeframe, BarsOptions } from "src/services/alpaca/asset/types";
import { Button } from "src/common/components/Button";
import { timeOptions } from "../constants";

const Header = styled.View`
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
`;

const Options = styled.View`
    flex-flow: row nowrap;
`;
const optionsTextStyles = css`
    margin: 0 5px;
    padding: 5px 5px 0 5px;
`;
const optionActive = css`
    border-top-color: ${color.darkBlue};
    border-top-width: 1px;
    color: ${color.darkGrey};
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
                    <Options>
                        {timeOptions.map((to, index) => {
                            return (
                                <Button
                                    key={`time-${index}`}
                                    onPress={this.onPressTime}
                                    styles={optionsTextStyles}
                                    textStyles={this.state.timeframe === to.timeframe && optionActive}
                                    label={to.text}
                                    value={to.timeframe}
                                    type="text"
                                />
                            );
                        })}
                    </Options>
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
