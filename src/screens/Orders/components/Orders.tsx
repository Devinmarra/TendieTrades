import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { Wrap, StyledScrollView } from "src/common/components/Screen";
import { NavBar } from "src/services/navigation/components/NavBar";
import ViewOrder from "../children/components/ViewOrder";
import CreateOrder from "../children/components/CreateOrder";

export interface OrdersProps {
    test: boolean;
}
export class Orders extends React.PureComponent<OrdersProps> {
    render() {
        return (
            <Wrap>
                <StyledScrollView>
                    <CreateOrder />
                    <ViewOrder />
                </StyledScrollView>
                <NavBar />
            </Wrap>
        );
    }
}
export const mapStateToProps = (state: RootState) => {
    if (!state) {
        return { test: false };
    }
    return { test: true };
};
export const mapDispatchToProps = (_dispatch: Dispatch) => {
    return {
        //   setStatus: (status: boolean) => {
        //     dispatch(actions.updateStatus(status));
        //   },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
