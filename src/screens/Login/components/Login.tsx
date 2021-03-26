import React from "react";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { actions as loginActions } from "src/services/alpaca/login/slicer";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
import { Wrap } from "src/common/components/Screen";
import { Input } from "src/common/components/Input";
import styled, { css } from "styled-components/native";
import { Checkbox } from "src/common/components/Checkbox";
import { Dimensions, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import * as z from "zod";
import { Button } from "src/common/components/Button";
import { getDefaultLoginState } from "../selectors";

const windowWidth = Dimensions.get("window").width;

const wrapperStyles = css`
    height: fit-content;
    padding: 20px;
    flex-flow: row wrap;
`;
const inputStyles = css`
    margin: 5px 0 0 0;
`;
const warnStyle = css`
    color: red;
`;
const noWrap = css`
    flex-flow: nowrap;
`;
const checkboxStyles = css`
    margin-right: 5px;
`;

const Field = styled.View`
    margin: 5px 0 20px 0;
    width: ${windowWidth}px;
    max-width: 300px;
    ${(props: z.infer<z.ZodRecord>) => props.nowrap && noWrap}
`;
export interface LoginProps {
    appApiKey: string;
    appApiSecret: string;
    paperTrading: boolean;
    usePolygon: boolean;
    submitLogin: () => void;
    updatePolygon: (value: boolean) => void;
    updatePaperTrade: (value: boolean) => void;
    updateSecret: (value: string) => void;
    updateKey: (value: string) => void;
}
export class Login extends React.PureComponent<LoginProps> {
    public onPressSubmit = () => {
        this.props.submitLogin();
    };
    public onKeyChanged = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        this.props.updateKey(event.nativeEvent.text);
    };
    public onSecretChanged = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        this.props.updateSecret(event.nativeEvent.text);
    };
    public onTogglePaper = () => {
        this.props.updatePaperTrade(!this.props.paperTrading);
    };
    public onTogglePolygon = () => {
        this.props.updatePolygon(!this.props.usePolygon);
    };
    public render() {
        return (
            <Wrap styles={wrapperStyles}>
                <Card>
                    <Text bold>Please Log In</Text>

                    <Field>
                        <Text bold>App Api Key</Text>
                        <Input
                            secureTextEntry={true}
                            value={this.props.appApiKey}
                            styles={inputStyles}
                            onChange={this.onKeyChanged}
                        />
                    </Field>
                    <Field>
                        <Text bold>App Api Secret</Text>
                        <Input
                            secureTextEntry={true}
                            value={this.props.appApiSecret}
                            styles={inputStyles}
                            onChange={this.onSecretChanged}
                        />
                    </Field>

                    <Field nowrap>
                        <Checkbox selected={this.props.paperTrading} styles={checkboxStyles} onPress={this.onTogglePaper} />
                        <Text bold>Paper (hands) Trading</Text>
                    </Field>
                    {!this.props.paperTrading && (
                        <Field>
                            <Text bold styles={warnStyle}>
                                WARNING: This is the REAL DEAL. You're going to be making MARKET TRADES
                            </Text>
                        </Field>
                    )}

                    <Field nowrap>
                        <Checkbox selected={this.props.usePolygon} styles={checkboxStyles} onPress={this.onTogglePolygon} />
                        <Text bold>Use Polygon</Text>
                    </Field>

                    <Button onPress={this.onPressSubmit} primary label="Submit" />
                </Card>
            </Wrap>
        );
    }
}

export const mapStateToProps = (state: RootState) => {
    const loginState = getDefaultLoginState(state);
    if (!state) {
        return { appApiKey: "", appApiSecret: "", paperTrading: true, usePolygon: false };
    }
    return {
        appApiKey: loginState.appApiKey,
        appApiSecret: loginState.appApiSecret,
        paperTrading: loginState.paperTrading,
        usePolygon: loginState.usePolygon,
    };
};
export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateKey: (value: string) => {
            dispatch(loginActions.keyUpdated(value));
        },
        updateSecret: (value: string) => {
            dispatch(loginActions.secretUpdated(value));
        },
        updatePaperTrade: (value: boolean) => {
            dispatch(loginActions.paperHandsUpdated(value));
        },
        updatePolygon: (value: boolean) => {
            dispatch(loginActions.polygonUpdated(value));
        },
        submitLogin: () => {
            dispatch(loginActions.loginSubmitted());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
