import React from "react";
import styled from "styled-components/native";
import * as z from "zod";
import { NativeTouchEvent } from "react-native";
import { color } from "../constants";

const SelectedBox = styled.View`
    background-color: ${color.darkBlue};
    width: 14px;
    height: 14px;
    border-radius: 3px;
`;

const StyledBox = styled.Pressable`
    border-color: #aaa;
    border-width: 1px;
    border-radius: 3px;
    padding: 3px;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    ${(props: CheckboxProps) => props.styles}
`;

export interface CheckboxProps {
    styles?: string | z.infer<z.ZodRecord>;
    selected: boolean;
    onPress?: (event: NativeTouchEvent) => void;
}
export class Checkbox extends React.PureComponent<CheckboxProps> {
    public render() {
        return (
            <StyledBox styles={this.props.styles} onPress={this.props.onPress}>
                {this.props.selected && <SelectedBox />}
            </StyledBox>
        );
    }
}
