import * as React from "react";
import { NavigationContainerRef } from "@react-navigation/native";

export const navigationRef = React.createRef<NavigationContainerRef>() as React.MutableRefObject<NavigationContainerRef>;
export const isReadyRef = React.createRef() as React.MutableRefObject<unknown>;

export function navigate(name: string, params?: Record<string, unknown> | undefined) {
    navigationRef.current.navigate(name, params);
}

export function goBack() {
    return navigationRef.current?.getRootState()?.routes[0]?.state?.index;
}
