import React, {Component} from 'react';
import styles from "./styles";
import {
  TextInput,
  View,
  Text,
  Platform
} from 'react-native';

class Header extends Component {
   constructor(props) {
    super(props);
    }

 render(){
     let { label,value, keyboardType,onChangeText, error} = this.props;
     return(
        <View style={styles.formOneItems}>
            <View style={styles.formOneLabel}>
                <Text style={styles.formOneLabelText}>
                  {label} *
                </Text>
            </View>
            <View style={[styles.formOneInput,{padding: (Platform.OS === "ios"? 12: 0) }]}>
                <TextInput
                 value={value}
                 keyboardType={keyboardType}
                 autoCorrect={false}
                 onChangeText={onChangeText}
                 style={styles.formOneInputText} 
                 />
            </View>
            <View style={styles.formOneError}>
                <Text style={styles.formOneErrorText}>
                    {error ? error  : ""}
                </Text>
            </View>
      </View>
     );
 }
}

export default Header;