import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import CreateOrder from "src/modules/Orders/components/CreateOrder";
import ViewOrder from "src/modules/Orders/components/ViewOrder";
import Portfolio from "src/modules/Portfolio/components/Portfolio";
import Positions from "src/modules/Positions/components/Positions";
import { Wrap, StyledScrollView } from "src/common/components/Screen";
import Overview from "src/screens/Account/children/components/Overview";
import { NavBar } from "src/services/navigation/components/NavBar";

export interface DashboardProps {
    test: boolean;
}
export class Dashboard extends React.PureComponent<DashboardProps> {
    render() {
        return (
            <Wrap>
                <StyledScrollView>
                    <Overview />

                    <CreateOrder />
                    <ViewOrder />
                    <Portfolio />
                    <Positions />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
