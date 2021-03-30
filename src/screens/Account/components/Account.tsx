import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { default as AccountComponent } from "src/modules/Account/components/Account";
import { Wrap, StyledScrollView } from "src/common/components/Screen";
import { NavBar } from "src/services/navigation/components/NavBar";

export interface AccountProps {
    test: boolean;
}
export class Account extends React.PureComponent<AccountProps> {
    render() {
        return (
            <Wrap>
                <StyledScrollView>
                    <AccountComponent />
                </StyledScrollView>
                <NavBar />
            </Wrap>
        );
    }
}
export const mapStateToProps = (_state: RootState) => {
    return { test: true };
};
export const mapDispatchToProps = (_dispatch: Dispatch) => {
    return {
        //   setStatus: (status: boolean) => {
        //     dispatch(actions.updateStatus(status));
        //   },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
