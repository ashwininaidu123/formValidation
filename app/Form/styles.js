import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 
    headContainer: {
      backgroundColor: '#3172D9',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    viewStyle:{
      backgroundColor: '#3172D9',
      padding: 20,
      marginTop: 40,
      flexDirection: 'row', 
    },
    icon: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonContainer: {
      borderRadius: 20,
      borderColor: 'black',
      borderWidth: 2,
      margin: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }, 
    mainContainer: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#f9f9f9',
      flexDirection: 'column',
      alignItems: 'center',
    },
    stepOne: {
      borderRadius: 20,
    },
    buttonOne: {
      width: '50%',
      borderRadius: 20,
      textAlign: 'center',
    },
    stepOne: {
      fontSize: 20,
      fontWeight: '500'
    },
    stepTwo: {
      fontSize: 20,
      fontWeight: '500'
    },
    buttonTwo: {
      width: '50%',
      borderRadius: 20,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    },
    formContainer: {
        width: '90%',
        flex:1,
        display: 'flex',
        paddingBottom: 30,
    },
    formInner: {
      backgroundColor: '#FFFFFF',
      shadowColor: "#CECECE",
      shadowOpacity: 0.9,
      shadowRadius: 2,
      elevation: 2,
      shadowOffset: {
      height: 2,
      width: 2
      },
      flex:1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    formOne: {
      width: '100%',
      flex: 1,
      flexDirection: 'column', 
      justifyContent: 'flex-end',
    },
    formHeader: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingBottom: 10,
    },
    formHiddenHeader: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      borderBottomWidth: 1,
      borderColor: 'grey',
    },
    formOneHeader: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding:10,
    },
    formOneHiddenHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding:15,
    },
    formOneHeaderText: {
      fontSize: 20,
      fontWeight: "500",
    },
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
      padding: 12
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
    nextButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 15,
    },
    formOneItemsButton: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    formItemsOne: {
      flex: 1,
      paddingHorizontal: 10,
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    formItemsTwo: {
      flex: 1,
      paddingHorizontal: 10,
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    nextButton: {
      width: '60%',
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#3172D9',
      shadowOpacity: 1,
      shadowRadius: 2,
      shadowOffset: {
      height: 1,
      width: 1
      },
    },
    next:{
      fontWeight: 'bold',
      borderRadius: 20,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 24,
      borderRadius: 20,
      color: 'white',
      fontWeight: 'bold',
      marginLeft: 8
    },
    icon: {
      color: "#FFFFFF",
      fontSize:24,
      marginLeft: 8
    },
    buttonContent: {
      paddingVertical: 5,
      paddingHorizontal: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    hiddenContent: {
      padding: 5,
      backgroundColor: '#E2EEFB',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    hiddenElement: {
      padding: 5,
    },
    hiddenElementText: {
      paddingVertical: 3,
    }

});

export default styles;
