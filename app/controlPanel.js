import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'native-base';
import DeviceInfo from 'react-native-device-info';

export class ControlPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}></View>
            </View>
            <View style={styles.userContainer}>
              <Text style={styles.itemHeader}>USER NAME</Text>
            </View>
            <View style={styles.cancelContainer}>
              <TouchableOpacity
                onPress={() => this.props.closeDrawer()}
                style={styles.icon}>
                <Icon
                  style={{color: '#FFFFFF', marginLeft: 10}}
                  type="Entypo"
                  name="cross"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.itemMenu}>
              <TouchableOpacity
                style={styles.icon}
                // onPress={}
              >
                <Text style={[styles.item]}>MENU ITEM 1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.itemMenu}>
              <TouchableOpacity
                style={styles.icon}
                //onPress={}
              >
                <Text style={[styles.item]}>MENU ITEM 2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.itemMenu}>
              <TouchableOpacity
                style={styles.icon}
                // onPress={}
              >
                <Text style={[styles.item]}>MENU ITEM 3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.itemMenu}>
              <TouchableOpacity
                style={styles.icon}
                //onPress={}
              >
                <Text style={[styles.item]}>MENU ITEM 4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ControlPanel;

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },
  mainContainer: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    height: DeviceInfo.hasNotch() ? '30%' : '20%',
    paddingTop: 10,
    justifyContent: 'space-around',
    backgroundColor: '#3172D9',
    alignItems: 'center',
  },
  itemHeader: {
    borderColor: '#fff',
    color: 'white',
    fontSize: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: '#ffffff',
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  itemContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  itemMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#C0C0C0',
    borderBottomWidth: 1,
    padding: 30,
    marginHorizontal: 40,
  },
  item: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
    alignItems: 'center',
  },
});
