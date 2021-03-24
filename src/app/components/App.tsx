import React from "react";
import { Provider } from "react-redux";
import { getStoreInstance } from "../../store/store";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "src/services/navigation/components/Navigation";
import { navigationRef } from "src/services/navigation";

const storeInstance = getStoreInstance();
const App = () => {
    return (
        <React.StrictMode>
            <Provider store={storeInstance}>
                <NavigationContainer ref={navigationRef}>
                    <Navigation />
                </NavigationContainer>
            </Provider>
        </React.StrictMode>
    );
};

export default App;
