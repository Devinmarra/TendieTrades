import React from "react";
import { NativeSyntheticEvent, PressableProps } from "react-native";
import styled, { css } from "styled-components/native";
import { color } from "src/common/constants";
import { Button } from "src/common/components/Button";

const Options = styled.View`
    flex-flow: row nowrap;
`;
const optionsTextStyles = css`
    margin: 0 5px;
    padding: 5px 5px 0 5px;
`;
const optionsBase = css`
    border-top-color: transparent;
    border-top-width: 1px;
`;
const optionActive = css`
    border-top-color: ${color.darkBlue};
    border-top-width: 1px;
    color: ${color.darkGrey};
`;

interface SelectionBarOptions {
    value: string;
    label: string;
}
export interface SelectionBarProps {
    options: SelectionBarOptions[];
    selected: string;
    onPress: (event: NativeSyntheticEvent<PressableProps>, value?: string) => void;
}

export class SelectionBar extends React.PureComponent<SelectionBarProps> {
    public render() {
        return (
            <Options>
                {this.props.options.map((opt, index) => {
                    return (
                        <Button
                            key={`time-${index}`}
                            onPress={this.props.onPress}
                            styles={optionsTextStyles}
                            textStyles={[optionsBase, this.props.selected === opt.value && optionActive]}
                            label={opt.label}
                            value={opt.value}
                            type="text"
                        />
                    );
                })}
            </Options>
        );
    }
}

export default SelectionBar;
