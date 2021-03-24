import React from "react";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { actions } from "../slicer";
import { actions as loginActions } from "src/services/alpaca/login/slicer";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
import { ApiConfig } from "src/services/alpaca/types";
import { Wrap } from "src/common/components/Screen";
import { Input } from "src/common/components/Input";
import styled, { css } from "styled-components/native";
import { Checkbox } from "src/common/components/Checkbox";
import { Dimensions, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import * as z from "zod";
import { Button } from "src/common/components/Button";

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
    isTrue: boolean;
    setStatus: (status: boolean) => void;
    configureApi: (config: ApiConfig) => void;
}
export interface LoginState {
    appApiKey: string;
    appApiSecret: string;
    paperTrading: boolean;
    usePolygon: boolean;
}
export class Login extends React.PureComponent<LoginProps, LoginState> {
    public state: LoginState = {
        appApiKey: "",
        appApiSecret: "",
        paperTrading: true,
        usePolygon: false,
    };
    public onPressSwitch = () => {
        this.props.setStatus(!this.props.isTrue);
    };
    public onPressSubmit = () => {
        this.props.configureApi({
            appApiKey: this.state.appApiKey,
            appApiSecret: this.state.appApiSecret,
            paperTrading: this.state.paperTrading,
            usePolygon: this.state.usePolygon,
        });
    };
    public onKeyChanged = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        this.setState({ appApiKey: event.nativeEvent.text });
    };
    public onSecretChanged = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        this.setState({ appApiSecret: event.nativeEvent.text });
    };
    public onTogglePaper = () => {
        this.setState({ paperTrading: !this.state.paperTrading });
    };
    public onTogglePolygon = () => {
        this.setState({ usePolygon: !this.state.usePolygon });
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
                            value={this.state.appApiKey}
                            styles={inputStyles}
                            onChange={this.onKeyChanged}
                        />
                    </Field>
                    <Field>
                        <Text bold>App Api Secret</Text>
                        <Input
                            secureTextEntry={true}
                            value={this.state.appApiSecret}
                            styles={inputStyles}
                            onChange={this.onSecretChanged}
                        />
                    </Field>

                    <Field nowrap>
                        <Checkbox selected={this.state.paperTrading} styles={checkboxStyles} onPress={this.onTogglePaper} />
                        <Text bold>Paper (hands) Trading</Text>
                    </Field>
                    {!this.state.paperTrading && (
                        <Field>
                            <Text bold styles={warnStyle}>
                                WARNING: This is the REAL DEAL. You're going to be making MARKET TRADES
                            </Text>
                        </Field>
                    )}

                    <Field nowrap>
                        <Checkbox selected={this.state.usePolygon} styles={checkboxStyles} onPress={this.onTogglePolygon} />
                        <Text bold>Use Polygon</Text>
                    </Field>

                    <Button onPress={this.onPressSubmit} primary label="Submit" />
                </Card>
            </Wrap>
        );
    }
}

export const mapStateToProps = (state: RootState) => {
    if (!state) {
        return { isTrue: false };
    }
    return { isTrue: false };
};
export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setStatus: (status: boolean) => {
            dispatch(actions.updateStatus(status));
        },
        configureApi: (config: ApiConfig) => {
            dispatch(loginActions.configureApi(config));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
