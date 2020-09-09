import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formOneItems:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
      },
      formOneLabel: {
        paddingVertical: 5,
      },
      formOneLabelText: {
        fontSize: 20,
        fontWeight: "400",
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
