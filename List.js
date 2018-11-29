import React, { Component } from 'react';
import styles from './Styles';
import { ActivityIndicator, Text, View, FlatList, Image, Linking, Button } from 'react-native';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      api: this.props.navigation.getParam('api')
    };
  }

  componentDidMount() {
    return fetch(this.state.api)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.articles
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>{this.state.dataSource[0].source.name}</Text>
        <FlatList data={this.state.dataSource} renderItem={({ item }) => this.renderListItem(item)} keyExtractor={({ id }, index) => id} />
      </View>
    );
  }

  renderListItem(item) {
    return (
      <View style={styles.newsItem} key={item.id}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>Author: {item.author}</Text>
        <Text style={styles.date}>{new Date(item.publishedAt).toDateString()}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Image style={styles.image} source={{ uri: `${item.urlToImage}` }} />
        <View style={styles.buttonsContainer}>
          <Button onPress={() => this.routeToWebsite(item.url)} title="Visit website" />
          <Button
            onPress={() => {
              this.props.navigation.navigate('Article', { article: item });
            }}
            title="Read article"
          />
        </View>
      </View>
    );
  }

  routeToWebsite = url => {
    Linking.openURL(`${url}`);
  };
}
