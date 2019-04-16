import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Article from './Article';
import List from './List';
import HomeScreen from './HomeScreen';
import codepush from 'react-native-code-push';
import CodePush from 'react-native-code-push';

export class App extends Component {
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

const codePushOptions = {
  checkFrequency: codepush.CheckFrequency.ON_APP_START
};

const AppContainer = createAppContainer(AppNavigator);

export default CodePush(codePushOptions)(App);
