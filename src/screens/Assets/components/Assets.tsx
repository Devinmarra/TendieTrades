import * as React from "react";
import GetAsset from "src/screens/Assets/children/components/GetAsset";
import { Wrap, StyledScrollView } from "src/common/components/Screen";
import { NavBar } from "src/services/navigation/components/NavBar";
import AssetDetails from "../children/components/AssetDetails";
import LastTrade from "../children/components/LastTrade";
import LastQuote from "../children/components/LastQuote";
import Bars from "../children/components/Bars";

export interface AssetsProps {
    test: boolean;
}
export class Assets extends React.PureComponent<AssetsProps> {
    render() {
        return (
            <Wrap>
                <StyledScrollView>
                    <GetAsset />
                    <AssetDetails />
                    <LastTrade />
                    <LastQuote />
                    <Bars />
                </StyledScrollView>
                <NavBar />
            </Wrap>
        );
    }
}

export default Assets;
