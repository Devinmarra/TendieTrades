import React from "react";
import styled from "styled-components/native";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import * as z from "zod";

const StyledInput = styled.TextInput`
    border-color: #ddd;
    border-width: 1px;
    border-radius: 3px;
    padding: 3px;
    ${(props: InputProps) => props.styles}
`;

export interface InputProps {
    secureTextEntry?: boolean;
    value?: string;
    styles?: string | z.infer<z.ZodRecord>;
    onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}
export class Input extends React.PureComponent<InputProps> {
    public render() {
        return (
            <StyledInput
                secureTextEntry={this.props.secureTextEntry}
                value={this.props.value}
                styles={this.props.styles}
                onChange={this.props.onChange}
            />
        );
    }
}
