import styled from "styled-components/native";
import * as z from "zod";

export const Wrap = styled.SafeAreaView`
    width: 100%;
    height: 105px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    ${(props: z.infer<z.ZodAny>) => props.styles}
`;

export const StyledScrollView = styled.ScrollView`
    max-width: 800px;
`;
