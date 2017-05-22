import Expo, { Constants } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/doggo.jpg')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.appContainer}>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/doggo.jpg')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.appContainer}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  icon: {
    width: 26,
    height: 26,
  },
});

const Pengo = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#000',
<<<<<<< HEAD
    inactiveTintColor: '#333',
    pressColor: '#222',
    style: {
      backgroundColor: '#fff',
    }
=======
    activeBackgroundColor: '#fff',
    inactiveTintColor: '#333',
    inactiveBackgroundColor: '#eee',
>>>>>>> 4cebb0f108bb497da7772c6377a95cd98ca4f400
  },
  tabBarPosition: 'bottom',
  swipeEnabled: true,
});

<<<<<<< HEAD

=======
>>>>>>> 4cebb0f108bb497da7772c6377a95cd98ca4f400
Expo.registerRootComponent(Pengo);
