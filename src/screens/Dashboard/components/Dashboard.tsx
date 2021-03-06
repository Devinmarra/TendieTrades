import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import Portfolio from "src/modules/Portfolio/components/Portfolio";
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

                    <Portfolio />
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
