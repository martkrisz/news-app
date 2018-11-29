import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Article from './Article';
import List from './List';
import HomeScreen from './HomeScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: List,
    Article: Article
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(AppNavigator);
