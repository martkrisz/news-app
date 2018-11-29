import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Styles';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: this.props.navigation.getParam('article')
    };
  }

  render() {
    return (
      <View style={styles.newsItem}>
        <Text style={styles.title}>{this.state.article.title}</Text>
        <Text style={styles.author}>Author: {this.state.article.author}</Text>
        <Text style={styles.date}>{new Date(this.state.article.publishedAt).toDateString()}</Text>
        <Image style={styles.image} source={{ uri: `${this.state.article.urlToImage}` }} />
        <Text style={styles.content}>{this.state.article.content}</Text>
      </View>
    );
  }
}
