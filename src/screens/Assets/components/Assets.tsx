import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import Asset from "src/modules/Asset/components/Asset";
import { Wrap, StyledScrollView } from "src/common/components/Screen";
import { NavBar } from "src/services/navigation/components/NavBar";

export interface AssetsProps {
    test: boolean;
}
export class Assets extends React.PureComponent<AssetsProps> {
    render() {
        return (
            <Wrap>
                <StyledScrollView>
                    <Asset />
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

export default connect(mapStateToProps, mapDispatchToProps)(Assets);
