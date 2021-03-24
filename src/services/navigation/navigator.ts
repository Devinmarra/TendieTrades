import * as React from "react";
import { NavigationContainerRef } from "@react-navigation/native";

export const navigationRef = React.createRef<NavigationContainerRef>() as React.MutableRefObject<NavigationContainerRef>;
export const isReadyRef = React.createRef() as React.MutableRefObject<unknown>;

export function navigate(name: string, params?: Record<string, unknown> | undefined) {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current.navigate(name, params);
    } else {
        console.log("NAV Error");
    }
}

export function goBack() {
    return navigationRef.current?.getRootState()?.routes[0]?.state?.index;
}
