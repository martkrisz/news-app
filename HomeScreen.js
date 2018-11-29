import React, { Component } from 'react';
import { View, Button, FlatList, Text } from 'react-native';
import styles from './Styles';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Welcome to NewsApp!</Text>
        <Text style={styles.title}>Choose a news feed!</Text>
        <FlatList data={newsFeeds} renderItem={({ item }) => this.renderListItem(item)} keyExtractor={({ id }, index) => id} />
      </View>
    );
  }

  renderListItem(feed) {
    return (
      <View style={styles.feed}>
        <Button
          title={feed.name}
          onPress={() => {
            this.props.navigation.navigate('List', { api: feed.api });
          }}
        />
      </View>
    );
  }
}

const newsFeeds = [
  {
    name: 'TechCrunch',
    api: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9a690af259744149aa38732591604a81'
  },
  {
    name: 'Financial Times',
    api: 'https://newsapi.org/v2/top-headlines?sources=financial-times&apiKey=9a690af259744149aa38732591604a81'
  },
  {
    name: 'Al Jazeera',
    api: 'https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=9a690af259744149aa38732591604a81'
  },
  {
    name: 'ABC News',
    api: 'https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=9a690af259744149aa38732591604a81'
  },
  {
    name: 'Axios',
    api: 'https://newsapi.org/v2/top-headlines?sources=axios&apiKey=9a690af259744149aa38732591604a81'
  },
  {
    name: 'Business Insider',
    api: 'https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=9a690af259744149aa38732591604a81'
  },
  {
    name: 'CBS News',
    api: 'https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=9a690af259744149aa38732591604a81'
  }
];
