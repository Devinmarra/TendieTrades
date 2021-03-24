import React from "react";
import styled from "styled-components/native";
import * as z from "zod";

const Wrapper = styled.View`
    background-color: #fff;
    border-width: 1px;
    border-color: #eee;
    padding: 20px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    ${(props: CardProps) => props.styles};
`;
type Children = z.infer<z.ZodAny>;
export interface CardProps {
    styles?: string | z.infer<z.ZodRecord>;
    children?: Children;
}
export const Card: React.FC<CardProps> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};
