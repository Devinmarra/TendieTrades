import React from "react";
import { RootState } from "../../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { actions as ordersActions } from "src/services/alpaca/orders/slicer";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
import SelectionBar from "src/common/components/SelectionBar";
import { orderTypes } from "../../constants";
import { NativeSyntheticEvent, PressableProps } from "react-native";
import { OrderStatusType } from "src/services/alpaca/orders/types";
export interface ViewOrderProps {
    getOrders: (s: OrderStatusType) => void;
}
export interface ViewOrderState {
    selectedType: OrderStatusType;
}
export class ViewOrder extends React.PureComponent<ViewOrderProps, ViewOrderState> {
    state: ViewOrderState = { selectedType: "open" };
    public onPressChangeOrderType = (_event: NativeSyntheticEvent<PressableProps>, value?: string) => {
        this.setState({ selectedType: value as OrderStatusType });
        this.props.getOrders(this.state.selectedType);
    };

    public render() {
        return (
            <Card>
                <Text>Orders</Text>
                <SelectionBar options={orderTypes} selected={this.state.selectedType} onPress={this.onPressChangeOrderType} />
            </Card>
        );
    }
}

export const mapStateToProps = (state: RootState) => {
    if (!state) {
        return {};
    }
    return {};
};
export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getOrders: (s: OrderStatusType) => {
            dispatch(ordersActions.getOrders(s));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewOrder);
