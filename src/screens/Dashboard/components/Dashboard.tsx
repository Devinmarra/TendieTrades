import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import Account from "src/modules/Account/components/Account";
import Asset from "src/modules/Asset/components/Asset";
import CreateOrder from "src/modules/Orders/components/CreateOrder";
import ViewOrder from "src/modules/Orders/components/ViewOrder";
import Portfolio from "src/modules/Portfolio/components/Portfolio";
import Positions from "src/modules/Positions/components/Positions";
import { Wrap, StyledScrollView } from "src/common/components/Screen";
import Overview from "src/modules/Account/components/Overview";

export interface DashboardProps {
    test: boolean;
}
export class Dashboard extends React.PureComponent<DashboardProps> {
    render() {
        return (
            <Wrap>
                <StyledScrollView>
                    <Overview />
                    <Account />
                    <Asset />
                    <CreateOrder />
                    <ViewOrder />
                    <Portfolio />
                    <Positions />
                </StyledScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
