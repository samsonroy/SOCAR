import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from './app.colors';
import * as containers from '../containers';
import {scale, verticalScale} from '@helpers/scale';
import navigationOptions from './app.theme';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const HomeScreenNavigator = createBottomTabNavigator(
  {
    Tab1: {
      screen: containers.Home,
      navigationOptions: {
        tabBarIcon: ({focused}) =>
          focused ? (
            <FontAwesome5 name={'house-damage'} size={20} />
          ) : (
            <FontAwesome5
              name={'house-damage'}
              size={20}
              color={Colors.bluishGrey}
            />
          ),
      },
    },
    Tab2: {
      screen: containers.Cars,
      navigationOptions: {
        tabBarIcon: ({focused}) =>
          focused ? (
            <Icon name={'car'} size={28} />
          ) : (
            <Icon name={'car'} size={28} color={Colors.bluishGrey} />
          ),
      },
    },
    Tab3: {
      screen: containers.Account,
      navigationOptions: {
        tabBarIcon: ({focused}) =>
          focused ? (
            <Icon name={'account'} size={28} />
          ) : (
            <Icon name={'account'} size={28} color={Colors.bluishGrey} />
          ),
      },
    },
    Tab4: {
      screen: containers.Settings,
      navigationOptions: {
        tabBarIcon: ({focused}) =>
          focused ? (
            <MaterialIcons name={'setting'} size={28} />
          ) : (
            <MaterialIcons
              name={'setting'}
              size={28}
              color={Colors.bluishGrey}
            />
          ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      scrollEnabled: false,
      activeTintColor: Colors.coralPink,
      inactiveTintColor: Colors.coralPink,
      showIcon: true,
      showLabel: false,
      style: {
        shadowColor: 'rgba(0,0,0,0.17)',
        shadowOffset: {
          width: 0,
          height: scale(-2),
        },
        shadowOpacity: 1.0,
        shadowRadius: scale(8),
        backgroundColor: Colors.white,
        height: scale(56),
        marginBottom: scale(2),
      },
      indicatorStyle: {
        opacity: 0, // Remove yellow bar Android
        borderTopColor: Colors.transparentz,
      },
    },
    indicatorStyle: {
      opacity: 0, // Remove yellow bar Android
      borderTopColor: Colors.transparentz,
    },
    navigationOptions: () => ({}),
  },
);

export const routes = {
  Splash: {
    screen: containers.Splash,
    navigationOptions: navigationOptions,
  },
  Home: {
    screen: HomeScreenNavigator,
    navigationOptions: navigationOptions,
  },
};

const styles = StyleSheet.create({
  tabBarLabelEnabled: {
    fontSize: scale(10),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#161616',
    marginBottom: verticalScale(7),
  },
  tabBarLabelDisabled: {
    fontWeight: 'bold',
    fontSize: scale(10),
    textAlign: 'center',
    color: '#A4A4A4',
    marginBottom: verticalScale(7),
  },
});
