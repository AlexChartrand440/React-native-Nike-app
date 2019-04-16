import React from 'react'
import {Text} from 'react-native'
import {createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";

import ListScreen from "../screens/ListScreen";
import {CartButton, MenuButton} from '../components/HeaderButtons'
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import WishListScreen from "../screens/WishListScreen";
import ShoeListScreen from "../screens/ShoeListScreen";

const defaultStackConfig = {
    // initialRouteName: 'ShoppingCart',
    defaultNavigationOptions: {
        // headerTintColor: '#ffe237',
        headerStyle: {
            backgroundColor: 'white',
            elevation: 0,
        },
        headerTitleStyle: {
            // backgroundColor: 'red',
        },
        headerTitleContainerStyle: {
            // backgroundColor: 'blue',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
}

const HomeStackNavigator = createStackNavigator({
    Popular: {
        // screen: ListScreen,
        screen: ShoeListScreen,
        navigationOptions: {
            title: 'POPULAR',
            headerLeft: MenuButton,
            headerRight: <CartButton/>
        }
    },
    ShoppingCart: {
        screen: ShoppingCartScreen,
        navigationOptions: {
            title: 'Your Cart',
        }
    }
}, defaultStackConfig)

const WishStackNavigator = createStackNavigator({
    WishList: {
        screen: WishListScreen,
        navigationOptions: {
            title: 'Wish List',
            headerLeft: MenuButton,
        }
    },
}, defaultStackConfig)

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStackNavigator,
    },
    Wish: {
        screen: WishStackNavigator,
        navigationOptions: {
            title: 'Wish List'
        }
    }
});

export default createAppContainer(MyDrawerNavigator)
