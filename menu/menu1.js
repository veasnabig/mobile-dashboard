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
const iconSize = 50;

// customIcon
// import CustomIconExample from './customIcon.js';

// WBIcon
import WBIcon from '../WBIcon/index.js';

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
              <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>ភ្នាក់ងារអង្គភាពរដ្ឋាករទឹក</Text>
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

            {/* first row */}
            <View style={{
              flex: 1, flexDirection: 'row',
              // marginTop: 20,
              // marginLeft: 20,
              // marginRight: 20
            }}>

              {/* first row, first column */}
              <View style={{
                flex: 1,
                borderRightColor: 'rgba(68, 160, 141,.9)',
                borderRightWidth: 1,
                borderBottomColor: 'rgba(68, 160, 141,.9)',
                borderBottomWidth: 1,
              }}>
                <TouchableOpacity>
                  <View style={styles.dashboardContainer}>
                    <View>
                      <WBIcon icon="payment" size={iconSize} />
                    </View>
                    <View>
                      <Text style={styles.dasboardText}>ទូរទាត់ថ្លៃទឹក</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              {/* first row, second column */}
              <View style={{
                flex: 1,
                borderBottomColor: 'rgba(68, 160, 141,.9)',
                borderBottomWidth: 1,
              }}>
                <TouchableOpacity>
                  <View style={styles.dashboardContainer}>
                    <View>
                      <WBIcon icon="balance" size={iconSize} />
                    </View>
                    <View>
                      <Text style={styles.dasboardText}>សមតុល្យ</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* second row */}
            <View style={{
              flex: 1, flexDirection: 'row',
              // marginLeft: 20,
              // marginRight: 20
            }}>

              {/* second row, first column */}
              <View style={{
                flex: 1,
                borderRightColor: 'rgba(68, 160, 141,.9)',
                borderRightWidth: 1,
                borderBottomColor: 'rgba(68, 160, 141,.9)',
                borderBottomWidth: 1,
              }}>
                <TouchableOpacity>
                  <View style={styles.dashboardContainer}>
                    <View>
                      <WBIcon icon="payment-history" size={iconSize} />
                    </View>
                    <View>
                      <Text style={styles.dasboardText}>ប្រវត្តិនៃការប្រើប្រាស់</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              {/* second row, second column */}
              <View style={{
                flex: 1,
                borderBottomColor: 'rgba(68, 160, 141,.9)',
                borderBottomWidth: 1,
              }}>
                <TouchableOpacity>
                  <View style={styles.dashboardContainer}>
                    <View>
                      <WBIcon icon="report" size={iconSize} />
                    </View>
                    <View>
                      <Text style={styles.dasboardText}>របាយការណ៍</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>


            {/* third row */}
            <View style={{
              flex: 1, flexDirection: 'row',
              borderBottomColor: 'rgba(68, 160, 141,.9)',
              borderBottomWidth: 1,
              // marginLeft: 20,
              // marginRight: 20,
              // marginBottom: 20
            }}>

              {/* third row, first column */}
              <View style={{
                flex: 1,
                borderRightColor: 'rgba(68, 160, 141,.9)',
                borderRightWidth: 1,
              }}>
                <TouchableOpacity>
                  <View style={styles.dashboardContainer}>
                    <View>
                      <WBIcon icon="hand-payment" size={iconSize} />
                    </View>
                    <View>
                      <Text style={styles.dasboardText}>ទូរទាត់រហ័ស</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              {/* fourth row, second column */}
              <View style={{
                flex: 1,
              }}>
                <TouchableOpacity>
                  <View style={styles.dashboardContainer}>
                    <View>
                      <WBIcon icon="profit" size={iconSize} />
                    </View>
                    <View>
                      <Text style={styles.dasboardText}>ប្រាក់ចំណេញប្រចាំខែ</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* third row */}
            <View style={{
              flex: 1, flexDirection: 'row',
              // marginLeft: 20,
              // marginRight: 20,
              // marginBottom: 20
            }}>

              {/* third row, first column */}
              <View style={{
                flex: 1,
                borderRightColor: 'rgba(68, 160, 141,.9)',
                borderRightWidth: 1,
              }}>
                <TouchableOpacity>
                  <View style={styles.dashboardContainer}>
                    <View>
                      <WBIcon icon="contact" size={iconSize} />
                    </View>
                    <View>
                      <Text style={styles.dasboardText}>ទំនាក់ទំនង</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              {/* third row, second column */}
              <View style={{
                flex: 1,
              }}>
                <TouchableOpacity>
                  <View style={styles.dashboardContainer}>
                    <View>
                      <WBIcon icon="branch-location-03" size={iconSize} />
                    </View>
                    <View>
                      <Text style={styles.dasboardText}>ទីតាំងសាខា</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
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
    // backgroundColor: 'rgba(255,255,255,.1)',
    // backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  dasboardText: {
    color: 'white',
    fontSize: 16,
    marginTop: 5
  }
})