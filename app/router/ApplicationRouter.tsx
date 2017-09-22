import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import {
  Home,
  Profile,
  SignIn,
  SignUp,
  FillPassword,
  Welcome
} from '../screens/'

const headerStyle = {
  marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
}

export const SignedOut = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up',
      headerStyle
    }
  },
  FillPassword: {
    screen: FillPassword,
    navigationOptions: {
      title: 'Fill Password',
      headerStyle
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign In',
      headerStyle
    }
  }
}, {initialRouteName: 'Welcome'})

export const SignedIn = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) =>
          <Icon type='ionicon' name='ios-film' size={30} color={tintColor} />
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) =>
          <Icon type='ionicon' name='ios-person' size={30} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }
    }
  }
)

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  )
}