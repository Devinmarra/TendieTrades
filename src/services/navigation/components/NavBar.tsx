import * as React from "react";
import styled from "styled-components/native";
import { Text } from "src/common/components/Text";
import { color } from "src/common/constants";
import { css } from "styled-components";
import { navigate } from "../navigator";

const Nav = styled.View`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: ${color.darkBlue};
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;
const navBarStyles = css`
    color: white;
    padding: 20px;
`;
export class NavBar extends React.PureComponent {
    // TODO: This is pretty lame.
    onPressDash = () => {
        navigate("Dashboard");
    };
    onPressAssets = () => {
        navigate("Assets");
    };
    onPressAccount = () => {
        navigate("Account");
    };
    render() {
        return (
            <Nav>
                <Text styles={navBarStyles} onPress={this.onPressDash}>
                    Dash
                </Text>
                <Text styles={navBarStyles} onPress={this.onPressAccount}>
                    Account
                </Text>
                <Text styles={navBarStyles} onPress={this.onPressAssets}>
                    Assets
                </Text>
            </Nav>
        );
    }
}
