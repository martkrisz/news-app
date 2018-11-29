import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  activityIndicator: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  feed: {
    marginTop: 24
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 24
  },
  newsItem: {
    padding: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  date: {
    fontStyle: 'italic',
    marginBottom: 8
  },
  author: {
    marginTop: 8
  },
  description: {
    textAlign: 'justify',
    marginBottom: 8
  },
  image: {
    width: '100%',
    height: 200
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24
  },
  content: {
    textAlign: 'justify'
  }
});