import Expo, { Constants } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { TabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Samuel', noOfTasks: 5 }
  }
  static navigationOptions = {
    tabBarLabel: 'Feed',
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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Hello {this.state.name}
          </Text>
          <Text style={styles.subtitle}>
            You have {this.state.noOfTasks} pieces of work due this week
          </Text>
        </View>

        <ScrollView style={styles.scrollContainer}>

          <View style={styles.scrollItem}>
            <Text style={styles.scrollItemTitle}>
              Tasks
            </Text>
          </View>

          <View style={styles.scrollItem}>
            <Text style={styles.scrollItemTitle}>
              Tasks
            </Text>
          </View>

          <View style={styles.scrollItem}>
            <Text style={styles.scrollItemTitle}>
              Tasks
            </Text>
          </View>

          <View style={styles.scrollItem}>
            <Text style={styles.scrollItemTitle}>
              Tasks
            </Text>
          </View>

          <View style={styles.scrollItem}>
            <Text style={styles.scrollItemTitle}>
              Tasks
            </Text>
          </View>

        </ScrollView>
      </View>
    );
  }
}

class TaskScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tasks',
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
          title='Go back home'
        />
      </View>
    );
  }
}

class TimetableScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Timetable',
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
          title='Go back home'
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
  titleContainer: {
    backgroundColor: '#4285f4',
    padding: 10,
    flexGrow: 0,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    color: '#333',
  },
  scrollContainer: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  scrollItem: {
    flex: 1,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginBottom: 0,
    borderRadius: 15,
    backgroundColor: '#4285f4',
  },
  scrollItemTitle: {
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 25,
    color: '#333',
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 5,
  }
});

const Pengo = TabNavigator({
    Home: {
      screen: HomeScreen,
    },
    Tasks: {
      screen: TaskScreen,
    },
    Timetable: {
      screen: TimetableScreen,
    },
  }, {
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#333',
    pressColor: '#555',
    style: {
      backgroundColor: '#fff',
    },
    indicatorStyle: {
      height: 5,
      backgroundColor: '#4285f4',
    },
  },
  tabBarPosition: 'bottom',
  swipeEnabled: true,
});


Expo.registerRootComponent(Pengo);
