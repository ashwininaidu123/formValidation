import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  formOneItems: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  formOneLabel: {
    paddingVertical: 3,
  },
  formOneLabelText: {
    fontSize: 16,
    fontWeight: '700',
  },
  formOneInput: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 3,
  },
  formOneInputDate: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 3,
  },
  formOneError: {
    paddingBottom: 10,
    paddingTop: 5,
  },
  formOneErrorText: {
    color: 'red',
  },
});

export default styles;
