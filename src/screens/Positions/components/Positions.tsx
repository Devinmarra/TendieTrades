import React from "react";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { actions as positionsActions } from "src/services/alpaca/positions/slicer";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
import { Wrap, StyledScrollView } from "src/common/components/Screen";
import { NavBar } from "src/services/navigation/components/NavBar";
import { FlatList } from "react-native";
import { Position } from "src/services/alpaca/positions/types";
import { getPositions } from "src/services/alpaca/positions/selector";
import * as z from "zod";
import styled from "styled-components/native";

const listStyle = {
    maxHeight: 300,
};
const Row = styled.View`
    background-color: #ddd;
    border-bottom-color: white;
    border-bottom-width: 1px;
    padding: 10px;
    width: 100%;
`;

export interface PositionsProps {
    positions: Position[];
    getPosition: (stonk?: string) => void;
    closePosition: (stonk?: string) => void;
}
export class Positions extends React.PureComponent<PositionsProps> {
    public onPressGetPosition = () => {
        this.props.getPosition();
    };
    public onPressClosePosition = () => {
        this.props.closePosition("SOS");
    };
    public renderPosition = ({ item, index }: z.infer<z.ZodAny>) => {
        return (
            <Row key={`row-${index}`}>
                <Text>{item.symbol}</Text>
                <Text>{item.exchange}</Text>
                <Text>asset_class {item.asset_class}</Text>
                <Text>qty {item.qty}</Text>
                <Text>Dollar Cost Average: {item.avg_entry_price}</Text>
                <Text>side {item.side}</Text>
                <Text>market_value {item.market_value}</Text>
                <Text>cost_basis {item.cost_basis}</Text>
                <Text>unrealized_pl {item.unrealized_pl}</Text>
                <Text>unrealized_plpc {item.unrealized_plpc}</Text>
                <Text>unrealized_intraday_pl {item.unrealized_intraday_pl}</Text>
                <Text>unrealized_intraday_plpc {item.unrealized_intraday_plpc}</Text>
                <Text>current_price {item.current_price}</Text>
                <Text>lastday_price {item.lastday_price}</Text>
                <Text>change_today {item.change_today}</Text>
            </Row>
        );
    };
    public getKey = (pos: Position) => pos.asset_id;

    public render() {
        return (
            <Wrap>
                <StyledScrollView>
                    <Card>
                        <Text onPress={this.onPressGetPosition}>Get Position (Refresh)</Text>
                        <Text onPress={this.onPressClosePosition}>
                            Close position (Market sell now) Need to type api response
                        </Text>
                    </Card>
                    <FlatList
                        data={this.props.positions}
                        renderItem={this.renderPosition}
                        keyExtractor={this.getKey}
                        style={listStyle}
                    />
                </StyledScrollView>
                <NavBar />
            </Wrap>
        );
    }
}

export const mapStateToProps = (state: RootState) => {
    return {
        positions: getPositions(state),
    };
};
export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getPosition: (stonk?: string) => {
            dispatch(positionsActions.getPosition(stonk));
        },
        closePosition: (stonk?: string) => {
            dispatch(positionsActions.closePosition(stonk));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Positions);
