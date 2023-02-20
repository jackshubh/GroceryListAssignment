import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#dcdde1',
  },
  quantityContainer: {
    marginTop: 5,
    marginBottom: 20,
    width: '40%',
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 5,
    width: '80%',
  },
  input: {
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  button: {
    margin: 10,
    width: '30%',
  },
  textContainer: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
