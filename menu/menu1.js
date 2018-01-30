import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  Vibration,
  Image
} from 'react-native';
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { LinearGradient, Constants } from 'expo';
const window = Dimensions.get('window');
const statusBarHeight = Constants.statusBarHeight;
const headerHeight = 56;

import left from '../assets/left.png';
import right from '../assets/right.png';
import up from '../assets/up.png';
import down from '../assets/down.png';
import line from '../assets/line.png';

export default class Menu1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={styles.statusBar} />
        <LinearGradient
          colors={['rgba(68, 160, 141,.9)', 'rgba(9, 54, 55,.9)']}
          style={styles.linearGradientContainer}
        >
          <View style={{
            height: headerHeight,
            backgroundColor: 'rgba(0,0,0,.4)',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
          }}>

            {/* left icon */}
            <View style={{
              // flex: 1,
              width: 56, height: 56,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Feather name="align-left" size={24} style={{ color: 'white' }}
                onPress={() => this.props.handleMenu()}
              />
            </View>

            {/* title */}
            <View style={{ flex: 2 }}>
              <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>WBM Agent</Text>
            </View>


            {/* left icon */}
            <View style={{
              width: 56, height: 56,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            </View>
          </View>

          <View style={{ flex: 2 }}>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={[, { flex: 1, }]}>
                  <TouchableOpacity>
                    <View style={styles.dashboardContainer}>
                      <Text>one</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ height: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Image source={line} style={{ width: '50%', height: 1 }} />
                  </View>
                </View>
              </View>

              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: 1, }}>
                  <Image source={line} style={{ height: '50%', top: '50%', width: 1 }} />
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity>
                    <View style={styles.dashboardContainer}>
                      <Text>one</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>

              <View style={{ flex: 1, flexDirection: 'row' }}>

                <View style={{ flex: 1 }}>
                  <TouchableOpacity>
                    <View style={styles.dashboardContainer}>
                      <Text>one</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ width: 1, }}>
                  <Image source={line} style={{ width: 1 }} />
                </View>
              </View>

              <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ height: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Image source={right} style={{ width: '90%', height: 1 }} />
                  </View>
                </View>
                <View style={[, { flex: 1, }]}>
                  <TouchableOpacity>
                    <View style={styles.dashboardContainer}>
                      <Text>one</Text>
                    </View>
                  </TouchableOpacity>
                </View>

              </View>


            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>

            </View>



          </View>
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  btnContainer: {
    width: 200,
    height: 40,
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold'
  },
  statusBar: {
    backgroundColor: "rgba(68, 160, 141,.7)",
    height: Constants.statusBarHeight,
  },
  linearGradientContainer: {
    // position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  dashboardContainer: {
    backgroundColor: 'rgba(0,0,0,.1)',
    // backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
})