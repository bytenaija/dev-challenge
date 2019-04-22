import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import UsersScene from './UsersScene';
import CompaniesScene from './CompaniesScene';
import UserScene from './UserScene';
import CompanyScene from './CompanyScene';
import UpdateUserScene from './UpdateUserScene';

const HomeScene = createBottomTabNavigator(
  {
    Users: createStackNavigator(
      {
        screen: UsersScene,
      },

      {
        defaultNavigationOptions: {
          headerBackground: (
            <LinearGradient
              colors={['#6200EE', '#10356c']}
              style={{ flex: 1 }}
            />
          ),
          headerTitleStyle: { color: '#fff' },
          headerTintColor: '#fff',
        },

        navigationOptions: {
          title: 'Users',
          tabBarIcon: ({ focused }) => (focused ? (
              <Icon
                name="users"
                size={24}
                color="#6200EE"
                iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              />
            ) : (
              <Icon
                name="users"
                size={24}
                color="#888"
                iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              />
            )),
        },
      },
    ),
    Companies: createStackNavigator(
      {
        screen: CompaniesScene,
      },
      {
        defaultNavigationOptions: {
          headerBackground: (
            <LinearGradient
              colors={['#6200EE', '#10356c']}
              style={{ flex: 1 }}
            />
          ),
          headerTitleStyle: { color: '#fff' },
          headerTintColor: '#fff',
        },
        navigationOptions: {
          title: 'Companies',

          tabBarIcon: ({ focused }) => (focused ? (
              <Icon
                name="home"
                size={24}
                iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                color="#6200EE"
              />
            ) : (
              <Icon
                name="home"
                size={24}
                iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                color="#888"
              />
            )),
        },
      },
    ),
  },

  {
    initialRouteName: 'Users',
    headerMode: 'screen',
  },
);

export default createStackNavigator(
  {
    HomeScene: {
      screen: HomeScene,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    UserScene,
    CompanyScene,
    UpdateUserScene,
  },
  {
    initialRouteName: 'HomeScene',
    defaultNavigationOptions: {
      headerBackground: (
        <LinearGradient colors={['#6200EE', '#10356c']} style={{ flex: 1 }} />
      ),
      headerTitleStyle: { color: '#fff' },
      headerTintColor: '#fff',
    },
  },
);
