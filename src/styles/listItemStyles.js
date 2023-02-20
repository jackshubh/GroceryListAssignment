import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  listItem: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#aaa',
    borderWidth: 1,
    borderStyle: 'dotted',
  },
  itemText: {
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  strikeItemText: {
    textDecorationLine: 'line-through',
    color: '#cc2900',
    textAlign: 'center',
    fontWeight: 'normal',
  },
});
