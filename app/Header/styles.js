import { StyleSheet } from "react-native";
import DeviceInfo from "react-native-device-info";

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
        marginTop: DeviceInfo.hasNotch() ? 20 : 0,
        flexDirection: 'row',
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
