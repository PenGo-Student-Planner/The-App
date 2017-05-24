import Expo, { Constants } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import { TabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    var feed = [
      { id: 0, name: 'Homework', colour: styles.scrlRed },
      { id: 1, name: 'Timetable', colour: styles.scrlBlue },
      { id: 2, name: 'Buy Premium!', colour: styles.scrlGold },
      { id: 3, name: 'Projects', colour: styles.scrlBlue },
      { id: 3, name: 'Zen mode', colour: styles.scrlBlue },
    ]
    this.state = { name: 'Samuel', noOfTasks: 5, feedItems: feed }
  }

  static navigationOptions = { tabBarLabel: 'Feed' };

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

        <FlatList
          style={styles.scrollContainer}
          data={this.state.feedItems}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) =>
            <View style={[styles.scrollItem, item.colour]}>
              <Text style={styles.scrollItemTitle} onPress={() => alert('Press detected')}>
                {item.name}
              </Text>
            </View>
          }
        />
      </View>
    );
  }
}

class TaskScreen extends React.Component {
  static navigationOptions = { tabBarLabel: 'Tasks' };

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
static navigationOptions = { tabBarLabel: 'Timetable' };

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
  },
  scrlRed: {
    backgroundColor: 'red',
  },
  scrlBlue: {
    backgroundColor: '#4285f4',
  },
  scrlGold: {
    backgroundColor: 'gold',
  },
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
  showIcon: false,
});


Expo.registerRootComponent(Pengo);
