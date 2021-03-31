import React from "react";
import styled from "styled-components/native";
import { NativeTouchEvent, NativeSyntheticEvent } from "react-native";
import * as z from "zod";

const StyledText = styled.Text`
    color: #2c2c2c;
    font-size: 15px;
    line-height: 20px;
    ${(props: TextProps) => props.bold && "font-weight: bold"}
    ${(props: TextProps) => props.styles}
`;
export interface TextProps {
    bold?: boolean;
    styles?: string | z.infer<z.ZodRecord>;
    onPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
    value?: string;
}
export class Text extends React.PureComponent<TextProps> {
    public render() {
        const { bold } = this.props;
        return (
            <StyledText onPress={this.props.onPress} bold={bold} styles={this.props.styles}>
                {this.props.value}
                {this.props.children}
            </StyledText>
        );
    }
}
