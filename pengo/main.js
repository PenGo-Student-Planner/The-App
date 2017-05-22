import Expo, { Constants } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
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

class TaskScreen extends React.Component {
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
    screen: HomeScreen,
  },
  Tasks: {
    screen: TaskScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#333',
    pressColor: '#222',
    style: {
      backgroundColor: '#fff',
    }
  },
  tabBarPosition: 'bottom',
  swipeEnabled: true,
});


Expo.registerRootComponent(Pengo);
