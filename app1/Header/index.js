import React, {Component} from 'react';
import styles from "./styles";
import {
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'native-base';

class Header extends Component {
   constructor(props) {
    super(props);
    }

 render(){
     let { onPress } = this.props;
     return(
        <View style={styles.headContainer}>
        <View style={styles.viewStyle}>
            <TouchableOpacity  onPress={() => onPress()}
                style={styles.icon}>
                <Icon
                    style={{ color: "#FFFFFF", marginLeft: 10 }}
                    type="Entypo"
                    name="menu"
                />
            </TouchableOpacity>
        </View>
        </View>
     );
 }
}

export default Header;