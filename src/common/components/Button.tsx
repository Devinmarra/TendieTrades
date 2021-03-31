import React from "react";
import styled from "styled-components/native";
import { NativeSyntheticEvent, PressableProps } from "react-native";
import * as z from "zod";
import { css } from "styled-components";
import { color } from "../constants";
import { Text } from "./Text";

const buttonTextStyles = (type: "button" | "text") => css`
    color: ${type === "button" ? "white" : color.darkBlue};
    font-weight: ${type === "button" ? "normal" : "bold"};
`;
const buttonStyles = css`
    padding: 4px 10px;
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
    ${(props: ButtonProps) => props.styles}
`;
export interface ButtonProps {
    styles?: string | z.infer<z.ZodRecord>;
    textStyles?: string | z.infer<z.ZodRecord>;
    onPress?: (event: NativeSyntheticEvent<PressableProps>, value?: string) => void;
    primary?: boolean;
    type?: "button" | "text";
    label?: string;
    value?: string;
}
export class Button extends React.PureComponent<ButtonProps> {
    public handlePress = (event: NativeSyntheticEvent<PressableProps>) => {
        if (this.props.onPress) {
            this.props.onPress(event, this.props.value);
        }
    };
    public render() {
        const { type = "button" } = this.props;
        return (
            <StyledButton onPress={this.handlePress} styles={this.props.styles} primary={this.props.primary} type={type}>
                {this.props.label && <Text styles={[buttonTextStyles(type), this.props.textStyles]}>{this.props.label}</Text>}
                {this.props.children}
            </StyledButton>
        );
    }
}
