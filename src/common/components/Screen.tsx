import styled from "styled-components/native";
import * as z from "zod";

export const Wrap = styled.SafeAreaView`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 50px;
    ${(props: z.infer<z.ZodAny>) => props.styles}
`;

export const StyledScrollView = styled.ScrollView`
    max-width: 600px;
`;
