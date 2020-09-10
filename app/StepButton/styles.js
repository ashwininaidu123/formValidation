import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonOne: {
    width: '50%',
    padding: 5,
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  stepOne: {
    fontSize: 15,
    paddingVertical: 5,
    textAlign: 'center',
    fontWeight: '500',
  },
  stepTwo: {
    fontSize: 15,
    paddingVertical: 5,
    fontWeight: '500',
  },
  buttonTwo: {
    width: '50%',
    padding: 5,
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
