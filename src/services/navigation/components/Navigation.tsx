import { createStackNavigator } from "@react-navigation/stack";
import { State as RootState } from "src/store/reducers";
import React from "react";
import { connect } from "react-redux";
import Login from "src/screens/Login/components/Login";
import { getLoggedInStatus } from "src/services/alpaca/login/selectors";
import Dashboard from "src/screens/Dashboard/components/Dashboard";

const Stack = createStackNavigator();
interface NavigationProps {
    isLoggedIn: boolean;
}
export class Navigation extends React.Component<NavigationProps> {
    render() {
        return (
            <Stack.Navigator
                initialRouteName={this.props.isLoggedIn ? "Tab" : "Login"}
                //  headerMode="none"
                // mode={this.props.isLoggedIn ? "card" : "modal"}
                screenOptions={{ cardOverlayEnabled: true, headerShown: false }}>
                {this.props.isLoggedIn && <Stack.Screen name="Dashboard" component={Dashboard} />}
                {!this.props.isLoggedIn && <Stack.Screen name="Login" component={Login} />}
            </Stack.Navigator>
        );
    }
}
export const mapStateToProps = (state: RootState) => {
    return {
        isLoggedIn: getLoggedInStatus(state),
    };
};
export default connect(mapStateToProps)(Navigation);
