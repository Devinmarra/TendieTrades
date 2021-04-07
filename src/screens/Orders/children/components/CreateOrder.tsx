import React from "react";
import { RootState } from "../../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { actions as ordersActions } from "src/services/alpaca/orders/slicer";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
export interface CreateOrderProps {
    createOrder: (s: string) => void;
}
export class CreateOrder extends React.PureComponent<CreateOrderProps> {
    public onPressCreateOrder = () => {
        this.props.createOrder("");
    };
    public render() {
        return (
            <Card>
                <Text onPress={this.onPressCreateOrder}>Create Order</Text>
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
        createOrder: (s: string) => {
            dispatch(ordersActions.createOrder(s));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder);
