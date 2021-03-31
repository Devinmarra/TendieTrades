import React from "react";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
import styled from "styled-components/native";
import { Bars as BarsType, Bar as BarType } from "src/services/alpaca/asset/types";
import { getBars, getSymbolInfo } from "src/services/alpaca/asset/selectors";
import { currency } from "src/common/utilities";
import { FlatList } from "react-native";
import * as z from "zod";
import { css } from "styled-components";

const Header = styled.View`
    margin-bottom: 20px;
`;
const Bar = styled.View`
    background-color: #ddd;
    border-bottom-color: white;
    border-bottom-width: 1px;
    padding: 10px;
    width: 100%;
`;
const Section = styled.View`
    width: 100%;
    flex-flow: row nowrap;
    justify-content: center;
`;
const barTextStyles = css`
    margin: 0 5px;
`;
export interface BarsProps {
    bars: BarsType;
    symbol: string;
}
const listStyle = {
    maxHeight: 300,
};
export class Bars extends React.PureComponent<BarsProps> {
    public renderBar = ({ item, index }: z.infer<z.ZodAny>) => {
        return (
            <Bar key={`bar-${index}`}>
                <Section>
                    <Text styles={barTextStyles}>Open: {currency(item.openPrice)}</Text>
                    <Text styles={barTextStyles}>Close: {currency(item.closePrice)}</Text>
                </Section>
                <Section>
                    <Text styles={barTextStyles}>High: {currency(item.highPrice)}</Text>
                    <Text styles={barTextStyles}>Low: {currency(item.openPrice)}</Text>
                </Section>
                <Section>
                    <Text styles={barTextStyles}>Volume: {item.volume}</Text>
                    <Text styles={barTextStyles}>Epoch: {item.startEpochTime}</Text>
                </Section>
            </Bar>
        );
    };
    public getKey = (bar: BarType) => bar.startEpochTime.toString();

    public render() {
        if (!this.props.symbol || !this.props.bars) {
            return null;
        }
        const symbol = this.props.symbol;
        const bars = this.props.bars[symbol];
        return (
            <Card>
                <Header>
                    <Text bold>Bars</Text>
                </Header>
                {bars && (
                    <FlatList
                        data={[...bars].reverse()}
                        renderItem={this.renderBar}
                        keyExtractor={this.getKey}
                        style={listStyle}
                    />
                )}
            </Card>
        );
    }
}

export const mapStateToProps = (state: RootState) => {
    return {
        bars: getBars(state),
        symbol: getSymbolInfo(state).symbol,
    };
};
export const mapDispatchToProps = (_dispatch: Dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Bars);
