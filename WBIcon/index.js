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
import glyphMap from '../assets/glyphmaps/WBIcon.json';
const Icon = createIconSet(glyphMap, 'FontName');

export default class WBIcon extends React.Component {
    state = {
        fontLoaded: false
    }
    async componentDidMount() {
        await Font.loadAsync({
            'FontName': require('../assets/font/WBIcon.ttf')
        });

        this.setState({ fontLoaded: true });
    }
    render() {
        if (!this.state.fontLoaded) { return null; }

        return (
            <Icon name={this.props.icon} size={this.props.size} color="white" />
        );
    }
}