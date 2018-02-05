import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar
} from 'react-native'

import { Font } from 'expo';
import { createIconSet } from '@expo/vector-icons';
const glyphMap = { 'wb-payment': 49, 'wb-payment-circle': 59648 };
const CustomIcon = createIconSet(glyphMap, 'FontName');

export default class CustomIconExample extends React.Component {
    state = {
        fontLoaded: false
    }
    async componentDidMount() {
        await Font.loadAsync({
            'FontName': require('../assets/font/wb-icon.ttf')
        });

        this.setState({ fontLoaded: true });
    }
    render() {
        if (!this.state.fontLoaded) { return null; }

        return (
            <CustomIcon name={this.props.icon} size={this.props.size} color="white" />
        );
    }
}