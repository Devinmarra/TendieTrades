import React from "react";
import styled from "styled-components/native";
import { NativeTouchEvent } from "react-native";
import * as z from "zod";
import { css } from "styled-components";
import { color } from "../constants";
import { Text } from "./Text";

const buttonTextStyles = css`
    color: white;
`;
const buttonStyles = css`
    padding: 4px;
    border-radius: 6px;
    text-align: center;
`;
const primaryStyles = css`
    background-color: ${color.darkBlue};
`;
const StyledButton = styled.Pressable`
    color: #000;
    font-size: 15px;
    line-height: 20px;
    ${(props: ButtonProps) => props.primary && primaryStyles}
    ${(props: ButtonProps) => props.type === "button" && buttonStyles}
`;
export interface ButtonProps {
    styles?: string | z.infer<z.ZodRecord>;
    onPress?: (event: NativeTouchEvent) => void;
    primary?: boolean;
    type?: "button" | "text";
    label?: string;
}
export class Button extends React.PureComponent<ButtonProps> {
    public render() {
        const { type = "button" } = this.props;
        return (
            <StyledButton onPress={this.props.onPress} styles={this.props.styles} primary={this.props.primary} type={type}>
                {this.props.label && <Text styles={buttonTextStyles}>Submit</Text>}
                {this.props.children}
            </StyledButton>
        );
    }
}
