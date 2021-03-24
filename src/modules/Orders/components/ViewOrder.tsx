import React from "react";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { actions as ordersActions } from "src/services/alpaca/orders/slicer";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
export interface ViewOrderProps {
    getOrders: (s: string) => void;
}
export class ViewOrder extends React.PureComponent<ViewOrderProps> {
    public onPressGetOrders = () => {
        this.props.getOrders("");
    };
    public render() {
        return (
            <Card>
                <Text>Orders</Text>
                <Text onPress={this.onPressGetOrders}>Get Orders</Text>
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
        getOrders: (s: string) => {
            dispatch(ordersActions.getOrders(s));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewOrder);
