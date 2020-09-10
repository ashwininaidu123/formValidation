import React, {Component} from 'react';
import styles from "./styles";
import {
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import {Icon} from 'native-base';

class StepButton extends Component {
   constructor(props) {
    super(props);
    }

 render(){
     let { butttonOne, butttonTwo, stepOne, stepTwo} = this.props;
     return(
        <View style={styles.buttonContainer}>
            <View style={[styles.buttonOne,{backgroundColor: stepOne? '#3172D9': '#FFFFFF'}]}>
            <Button
                onPress={() => butttonOne()}
                buttonStyle={[styles.stepOne, {backgroundColor: stepOne? '#3172D9': '#FFFFFF'}]}
                title="STEP1"
                color={stepOne? '#FFFFFF': 'black'}
            />
            </View>
            <View style={[styles.buttonTwo,{backgroundColor: stepTwo? '#3172D9': '#FFFFFF'}]}>
            <Button
                onPress={() => butttonTwo()}
                buttonStyle={[styles.stepOne, {backgroundColor: stepTwo? "#FFFFFF" : "#3172D9"}]}
                title="STEP2"
                color={stepTwo? '#FFFFFF': 'black'}
            />
            </View>
          </View>
     );
 }
}

export default StepButton;