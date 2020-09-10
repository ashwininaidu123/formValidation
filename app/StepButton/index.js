import React, {Component} from 'react';
import styles from './styles';
import {TouchableOpacity, View, Text} from 'react-native';
import {Icon} from 'native-base';

class StepButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {butttonOne, butttonTwo, stepOne, stepTwo} = this.props;
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.buttonOne,
            {backgroundColor: stepOne ? '#3172D9' : '#FFFFFF'},
          ]}
          onPress={() => butttonOne()}>
          <Text
            style={[styles.stepOne, {color: stepOne ? 'white' : '#3172D9'}]}>
            STEP1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => butttonTwo()}
          style={[
            styles.buttonTwo,
            {backgroundColor: stepTwo ? '#3172D9' : '#FFFFFF'},
          ]}>
          <Text style={[styles.stepOne, {color: stepTwo ? 'white' : 'black'}]}>
            STEP2
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default StepButton;
