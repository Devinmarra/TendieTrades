import * as React from "react";
import styled from "styled-components/native";
import { color } from "src/common/constants";
import { navigate } from "../navigator";
import { Button } from "src/common/components/Button";
import { NativeSyntheticEvent, PressableProps } from "react-native";

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
export class NavBar extends React.PureComponent {
    onPressNav = (_event: NativeSyntheticEvent<PressableProps>, value?: string) => {
        if (value) {
            navigate(value);
        }
    };
    render() {
        return (
            <Nav>
                <Button onPress={this.onPressNav} label="Dash" value="Dashboard" />
                <Button onPress={this.onPressNav} label="Positions" value="Positions" />
                <Button onPress={this.onPressNav} label="Account" value="Account" />
                <Button onPress={this.onPressNav} label="Stocks" value="Stocks" />
            </Nav>
        );
    }
}
