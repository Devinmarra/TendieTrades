import React from "react";
import { RootState } from "../parent";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { getAccountDetails } from "src/services/alpaca/account/selectors";
import { actions as accountActions } from "src/services/alpaca/account/slicer";
import { Text } from "src/common/components/Text";
import { Card } from "src/common/components/Card";
import { Checkbox } from "src/common/components/Checkbox";
import { AccountInfo } from "src/services/alpaca/account/types";
import { fields } from "../constants";
import styled from "styled-components/native";
import * as z from "zod";
import { css } from "styled-components";
import { currency } from "src/common/utilities";

const Field = styled.View`
    padding: 5px;
    margin-bottom: 5px;
    flex-flow: row nowrap;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: #eee;
    ${(props: z.infer<z.ZodRecord>) =>
        props.last &&
        css`
            border-bottom-width: 0px;
        `}
`;

export interface AccountProps {
    deets: AccountInfo;
}
export class Account extends React.PureComponent<AccountProps> {
    public render() {
        const details: z.infer<z.ZodRecord> = {
            ...this.props.deets,
        };
        return (
            <Card>
                {fields.map((field, index) => {
                    const key = field.key;
                    const val = details[key];
                    return (
                        <Field key={`field-${index}`} last={index + 1 === fields.length}>
                            <Text>{field.title}</Text>
                            {field.type !== "boolean" && (
                                <Text bold>
                                    {field.type === "currency" && `${currency(val)}`}
                                    {field.type !== "currency" && val}
                                </Text>
                            )}
                            {field.type === "boolean" && <Checkbox selected={val} />}
                        </Field>
                    );
                })}
            </Card>
        );
    }
}

export const mapStateToProps = (state: RootState) => {
    const deets = getAccountDetails(state);
    return {
        deets,
    };
};
export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getPortfolioHistory: () => {
            dispatch(accountActions.getPortfolioHistory());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
