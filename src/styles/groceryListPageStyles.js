import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    backgroundColor: '#dcdde1',
  },
  itemlist: {
    marginVertical: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#2f3640',
    marginTop: 20,
  },
  instructions: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#777',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
